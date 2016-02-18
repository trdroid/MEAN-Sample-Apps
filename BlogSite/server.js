var express = require('express'),
	mongoose = require('mongoose'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	/*
		passport implements authentication as strategies

		passport-local's strategy allows authentication by means of usernames and password that can be stored in our own database
	*/
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;

var app = express();

/*
	set the views property to the path where the views are located
*/
app.set('views', __dirname + '/server/views');

/*
	configure the view engine
*/	
app.set('view engine', 'jade');

/*
	cookieParser has to added before bodyParser

	The following is needed to configure passport
		as stated in http://passportjs.org/docs/configure
*/
app.use(cookieParser());
app.use(bodyParser());
app.use(session({secret: 'blogsite best Android apps'}));
app.use(passport.initialize());
app.use(passport.session());

/*
	setup static routing to the public directory (BlogSite/public) by using express's static middleware
*/
app.use(express.static(__dirname + '/public'));

/*
	connect to blogsite database on the local mongoDB server
*/
mongoose.connect('mongodb://localhost/blogsite');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Failed to connect. Error occurred ...'));

db.once('open', function() {
	console.log('Connected to blogsite database');
});

/*
	Create a schema for users

	Column names and Column types
*/
var userSchema = mongoose.Schema({
		username: String,
		firstName: String, 
		lastName: String,		
	});


/*
	Create a User model out of userSchema

	Pass in the collection name and the schema

	Mongoose processes the collection name i.e. 
		it makes the first letter small and 
		pluralizes the collection name
	to represent the collection in the database
	
	so, the collection name "User" represents "users" in the "blogsite" database
*/
var User = mongoose.model('User', userSchema);

var firstBlog;

/*
	Get all the documents from "users" collection by using the find() method on the "User" model

	If there is no user collection, create default users
*/
User.find({}).exec(function(err, userCollection) {
	if(userCollection.length == 0) {
		/*
			MAKE SURE THAT THE ATTRIBUTE NAMES OF DOCUMENT PASSED TO create() MATCHES WITH ATTRIBUTE NAMES
			PASSED TO mongoose.Schema

			Any typos would mean missing data.

			For example, if the schema is defined with username as one of its attributes,
				then passing userName (notice N is caps here) to create() method results in the actual 
				userName attribute unfilled for that document
		*/
		User.create({username: 'blackberry', firstName: 'Rim', lastName: 'blackberry'});
		User.create({username: 'android', firstName: 'Alphabet', lastName: 'Google'});
		User.create({username: 'iphone', firstName: 'Swift', lastName: 'ObjectiveC'});
	}
});

/*
	Configure passport to use LocalStrategy.

	Pass in a function to LocalStrategy
*/
passport.use(new LocalStrategy(
		function(username, password, done) {
			/*
				Implement custom code here to verify if the username and password are valid

				Use the "User" model defined earlier to verify if the username and password are valid

				Once the findOne() function returns, the callback registered with exec() function is executed.

				If the user exists in the database it is passed to the callback to the second parameter, else a null is passed. 
			*/

			User.findOne({username:username}).exec(function(err, user) {
				if(user) {
					return done(null, user);
				} else {
					return done(null, false);
				}
			});
		}		
	));

/*
	Let passport know how to serialize and deserialize user

	The serializeUser takes in a user and a done callback
*/
passport.serializeUser(function(user, done) {
	if(user) {
		/*
			if the user exists, call done by passing null and the user._id. The user._id passed here will be received in 
				passport.deserializeUser() method
		*/
		done(null, user._id);
	}
});

passport.deserializeUser(function(id, done) {
	/*
		Look up the User by id using findOne() method. The id passed here is the user._id sent from passport.serializeUser() function

		Register a callback by passing it to exec() function. The callback is executed after findOne() returns.

		Check in the callback if the user exists and call done
	*/
	User.findOne({_id:id}).exec(function(err, user) {
		if(user) {
			return done(null, user);
		} else {
			return done(null, false);
		}
	}) 
});

app.post('/signin', function(req, res, next) {
	/*
		specify passport.authenticate the strategy being used ('local' in this case)

		passport authenticate returns a function that needs to be called next
	*/
	var auth = passport.authenticate('local', function(err, user) {
		/*
			In case of an error, pass it on
		*/
		if(err) {
			return next(err);
		}

		/*
			if a user is not found, then the user parameter is given false by done(null, false)
				call in passport.use() method
		*/

		if(!user) {
			res.send({success: false});
		}

		/*
			if a user is found, then the user parameter is given the found user by done(null, user)
				call in passport.use() method,

			in which case, ask passport to log the user in by calling logIn() function on the request object.

			The logIn() function is added to the request object by passport.

			Calling req.logIn() is done for handling the login requests done via XHR
			if the login requests were handled by submitting a form, req.logIn() is called automatically
		*/

		req.logIn(user, function(err) {
			if(err) {
				return next(err);
			}

			/*
				if login was successful, send to the client a JSON object with success property as true indicating about successful login,
					and the user object in the user property
			*/
			res.send({success:true, user: user});
		});
	});

	/*
		call the auth function saved before
	*/
	auth(req, res, next);
});

/*
	The angular app sends XHR requests to /partials/:path, which are handled here.

	For example, a request to /partials/root implies that req.params.path is root, which then 
		attempts to render partials/root.jade. Since the views are configured to be found from /server/views
		directory, the file /server/views/partials/root.jade would be rendered

	The partials are therefore organized under /server/views/partials directory
*/
app.get('/partials/*', function(req, res) {
	res.render('partials/' + req.params[0]);
});


/*
	a catch-all route handler to serve up the index page when a request is made to a path that the server does not handle

	The index page is served to the client where angular handles routing (as this is a single page application)
*/
app.get('*', function(req, res) {
	/*
		The following did not work

		blogEntry: firstBlog

		Tried passing a model object to index.jade and tried accessing title and content properties as
			blogEntry.title and blogEntry.content in index.jade, which resulted in an error				
	*/

	/*
		pass an object with title and content properties to index.jade
	*/
	res.render('index');
});

var port = 8099;

app.listen(port);
console.log('Listening on port ' + port + '...');

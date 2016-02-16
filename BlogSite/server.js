var express = require('express'),
	mongoose = require('mongoose');

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
	Create a schema for blogs

	Column names and Column types
*/
var blogSchema = mongoose.Schema({
		title: String, 
		content: String
	});


/*
	Create a Blog model out of blogSchema

	Pass in the collection name and the schema

	Mongoose processes the collection name i.e. 
		it makes the first letter small and 
		pluralizes the collection name
	to represent the collection in the database
	
	so, the collection name "Blog" represents "blogs" in the "blogsite" database
*/
var Blog = mongoose.model('Blog', blogSchema);

var firstBlog;

/*
	Get the first document from the "blogs" collection

	findOne() without any parameters returns the first document in the collection.
	findOne() can be specified to execute a callback function on data return using the exec() method 
		by passing in the callback to execute

	The callback is passed two arguments: error if any and the first document in the collection
*/
Blog.findOne().exec(function(err, blogEntry) {
	firstBlog = blogEntry;
});

/*
	The angular app sends XHR requests to /partials/:path, which are handled here.

	For example, a request to /partials/root implies that req.params.path is root, which then 
		attempts to render partials/root.jade. Since the views are configured to be found from /server/views
		directory, the file /server/views/partials/root.jade would be rendered

	The partials are therefore organized under /server/views/partials directory
*/
app.get('/partials/:path', function(req, res) {
	res.render('partials/' + req.params.path);
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
	res.render('index', {
		title: firstBlog.title,
		content: firstBlog.content
	});
});

var port = 8099;

app.listen(port);
console.log('Listening on port ' + port + '...');
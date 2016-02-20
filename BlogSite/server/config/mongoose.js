var mongoose = require('mongoose'),
	crypto = require('crypto');

module.exports = function(config) {
	/*
		connect to blogsite database on the local mongoDB server
	*/
	mongoose.connect(config.connectionString);

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
			salt: String,
			hashedPassword: String		
		});

	userSchema.methods = {
		authenticate: function(userProvidedPassword) {
			return generateHashedPassword(userProvidedPassword, this.salt) === this.hashedPassword;
		}
	};

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

			var salt = generateSalt();
			var hashedPassword = generateHashedPassword('password1', salt);

			User.create({username: 'blackberry', firstName: 'Rim', lastName: 'blackberry', salt: salt, hashedPassword: hashedPassword});

			var salt = generateSalt();
			var hashedPassword = generateHashedPassword('password2', salt);

			User.create({username: 'android', firstName: 'Alphabet', lastName: 'Google', salt: salt, hashedPassword: hashedPassword});

			var salt = generateSalt();
			var hashedPassword = generateHashedPassword('password3', salt);

			User.create({username: 'iphone', firstName: 'Swift', lastName: 'ObjectiveC', salt: salt, hashedPassword: hashedPassword});
		}
	});	
}

function generateSalt() {
	return crypto.randomBytes(128).toString('base64');
}

function generateHashedPassword(password, salt) {
	/*
		pass in the name of the algorithm as the first parameter
	*/
	var hmac = crypto.createHmac('sha1', salt);

	/*
		set the encoding to HEX
	*/
	hmac.setEncoding('hex');

	hmac.write(password);

	hmac.end();

	return hmac.read();
}
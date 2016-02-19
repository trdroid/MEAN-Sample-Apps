var mongoose = require('mongoose');

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
}
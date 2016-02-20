var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	mongoose = require('mongoose'),
	User = mongoose.model('User');

	/*
		passport implements authentication as strategies

		passport-local's strategy allows authentication by means of usernames and password that can be stored in our own database
	*/

module.exports = function() {
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
					if(user && user.authenticate(password)) {	
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
}
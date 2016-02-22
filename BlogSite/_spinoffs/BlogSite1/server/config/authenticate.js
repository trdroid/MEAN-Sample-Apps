var passport = require('passport');

exports.authenticate = function(req, res, next) {
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
				console.log('Sending user');
				console.log('****************');
				res.send({success:true, user: user});				
			});
		});

		/*
			call the auth function saved before
		*/
		auth(req, res, next);
}
/*
	Add the $q service as a dependency so that the mvAuthenticate service can communicate with the controller using a promise
	about the status of the login
*/
angular.module('app').factory('mvAuthenticate', function($http, mvUserIdentity, $q) {
	return {
		authenticateUser: function(username, password) {
			//Create a promise to communicate with the controller
			var deferred = $q.defer();

			$http.post('/signin', {username: username, password: password}).then(function (response) {
				if(response.data.success) {				
					mvUserIdentity.user = response.data.user;	

					//resolve the deferred to true
					deferred.resolve(true);
				} else {					
					deferred.resolve(false);
				}
			});

			//return promise for the deferred
			return deferred.promise;
		},

		signoutUser: function() {
			var deferred = $q.defer();

			/*
				Send a POST request to /signout
				Pass in a body, otherwise Angular will treat POST as a GET
			*/
			$http.post('/signout', {signout: true}).then(function() {
				/*
					when it returns, set the user as undefined, and resolve the deferred

					Finally return the deferred promise
				*/
				mvUserIdentity.user = undefined;

				deferred.resolve();
			});

			return deferred.promise;
		}
	}
});
/*
	to store the user logged in
	also to verify if the has logged in
*/
angular.module('app').factory('mvUserIdentity', function() {
	return {
		user: undefined,
		isUserAuthenticated: function() {
			return !!this.user;
		}
	}
});
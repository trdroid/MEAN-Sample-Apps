angular.module('app').controller('mvMainController', function($scope, $http, mvToastrNotifier, mvUserIdentity, mvAuthenticate) {
	$scope.userIdentity = mvUserIdentity;

	$scope.signin = function(username, password) {
		mvAuthenticate.authenticateUser(username, password).then(function(success) {
			if(success) {
				mvToastrNotifier.notify('Successfully signed in', true);
			} else {
				mvToastrNotifier.notify('Username/password is incorrect', false);
			}
		});
	}
});
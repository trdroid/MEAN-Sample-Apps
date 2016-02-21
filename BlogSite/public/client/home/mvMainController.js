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

	/*	
		Listen to the 'clear' event that could be sent by mvNavBarController through the mvSharedService when the user hits signout

		Clear the text in the username and password controls by setting their corresponding models to empty string
	*/
	$scope.$on('clear', function(event, args) {
		$scope.username = "";
		$scope.password = "";
	});	
});
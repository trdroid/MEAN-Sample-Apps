angular.module('app').controller('mvNavBarController', function($scope, mvUserIdentity, mvAuthenticate, mvToastrNotifier, $location, mvSharedService) {
	$scope.userIdentity = mvUserIdentity;

	$scope.onAboutClick = function() {
		console.log('About clicked ...');
	}

	$scope.signout = function() {
		mvAuthenticate.signoutUser().then(function() {
			mvToastrNotifier.notify('Signed out!!', true);

			/*
				The models of username and password controls are in mvMainController's scope.

				When the user clicks on logout which is managed by mvNavBarController, there should be a way for mvNavBarController
					to clear the username and password input controls that are managed by mvMainController

				To implement this, a service "mvSharedService" is implemented.

				This service has a method to broadcast a message on $rootScope.

				mvMainController listens for this message and has an event handler registered that gets executed on the occurrence of this event.
					The event handler clears the models, username and password, consequently clearing the username and password input controls.			
			*/
			mvSharedService.clearSigninInputs();
			$location.path('/');						
		})
	}
});
angular.module('app').controller('mvMainController', function($scope, $http, mvToastrNotifier, mvUserIdentity) {
	$scope.userIdentity = mvUserIdentity;

	$scope.signin = function(username, password) {
		$http.post('/signin', {username: username, password: password}).then(function (response) {
			if(response.data.success) {				
				mvUserIdentity.user = response.data.user;
				mvToastrNotifier.notify('Successfully signed in', true);
			} else {
				//console.log('Failed to sign in');
				mvToastrNotifier.notify('Username/password is incorrect', false);
			}
		});
	}
});
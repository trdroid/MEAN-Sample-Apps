angular.module('app').controller('mvMainController', function($scope, $http) {
	$scope.signin = function(username, password) {
		$http.post('/signin', {username: username, password: password}).then(function (response) {
			if(response.data.success) {
				console.log('Signed in');
			} else {
				console.log('Failed to sign in');
			}
		});
	}
});
/*
	The main entry point to the Angular application

	define module 'app' that depends on ngResource and ngRoute modules
*/

angular.module('app', ['ngResource', 'ngRoute']);

/*
	Define the client-side routes by calling the config function and requiring $routeProvider and $locationProvider
*/
angular.module('app').config(function($routeProvider, $locationProvider) {
	/*
		use $locationProvider to turn on HTML5 mode for routing

		With recent versions of Angular, the head tag requires a base tag base(href="/") for routing to work properly.

		so, server/layouts/main_layout.jade would look like:

		doctype
		html
			head
				base(href="/")  <-----------
			body
				block main-content
				include scripts	
	*/
	$locationProvider.html5Mode(true);

	/*
		Use $routeProvider to define the routes
	*/

	$routeProvider
		.when('/', { templateUrl: 'partials/root', controller: 'mainController'});
		/* 
			when the routing system determines that the value of location.path() is '/', it will inject the template 'partials/root' 
			(or more precisely, it makes an XHR request to partials/root and injects its response)
			into the ngView directive and makes 'mainController' its controller
		*/
});

angular.module('app').controller('mainController', function($scope, $http) {
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
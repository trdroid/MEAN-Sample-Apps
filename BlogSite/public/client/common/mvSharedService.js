angular.module('app').factory('mvSharedService', function($rootScope) {
	return {
		clearSigninInputs: function() {
			/*
				broadcast a message to clear the username and password controls, the models of which are in mvMainController's scope
			*/
			$rootScope.$broadcast('clear');
		}
	}
});
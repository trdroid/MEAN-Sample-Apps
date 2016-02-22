/*
	wrap toastr in a service which puts the toastr global variable into a service so that it can be used in dependency injection
*/
angular.module('app').value('mvToastr', toastr);

/*
	create a notifier service based on toastr wrapped in the service
*/
angular.module('app').factory('mvToastrNotifier', function(mvToastr) {
	return {
		notify: function(msg, isSuccess) {
			if(isSuccess) {
				mvToastr.success(msg);				
			} else {
				mvToastr.error(msg);
			}			

			console.log(msg);
		}
	}
});
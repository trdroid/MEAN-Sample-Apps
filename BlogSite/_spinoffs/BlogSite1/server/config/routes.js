var authentication = require('./authenticate');

module.exports = function(app) {

	app.post('/signin', authentication.authenticate);

	app.post('/signout', function(req, res) {
		/*
			the logout function was added to the request object by the passport module

			As the client handles all views in this case, the redirection on the server-side is not necessary
		*/
		console.log('Signing out');
		console.log('****************');
		req.logout();
		res.end();
	});
	/*
		The angular app sends XHR requests to /partials/*, which are handled here.

		For example, a request to /partials/home/root implies that req.params[0] is home/root, which then 
			attempts to render ../../public/client/home/root.jade. Since the views are configured to be found from /server/views
			directory, ../../ refers to projects root directory, so the file ../../public/client/home/root.jade refers to
			BlogSite/public/client/home/root.jade, which is what would be rendered
	*/
	app.get('/partials/*', function(req, res) {
		console.log('Serving partials:' + req.params[0]);
		console.log('****************');
		res.render('../../public/client/' + req.params[0]);
	});


	/*
		a catch-all route handler to serve up the index page when a request is made to a path that the server does not handle

		The index page is served to the client where angular handles routing (as this is a single page application)
	*/
	app.get('*', function(req, res) {
		/*
			The following did not work

			blogEntry: firstBlog

			Tried passing a model object to index.jade and tried accessing title and content properties as
				blogEntry.title and blogEntry.content in index.jade, which resulted in an error				
		*/

		/*
			pass an object with title and content properties to index.jade
		*/
		console.log('Serving index page');
		console.log('****************');
		res.render('index');
	});		
}
var express = require('express');

var app = express();

/*
	set the views property to the path where the views are located
*/
app.set('views', __dirname + '/server/views');

/*
	configure the view engine
*/	
app.set('view engine', 'jade');

/*
	setup static routing to the public directory (BlogSite/public) by using express's static middleware
*/
app.use(express.static(__dirname + '/public'));

/*
	The angular app sends XHR requests to /partials/:path, which are handled here.

	For example, a request to /partials/root implies that req.params.path is root, which then 
		attempts to render partials/root.jade. Since the views are configured to be found from /server/views
		directory, the file /server/views/partials/root.jade would be rendered

	The partials are therefore organized under /server/views/partials directory
*/
app.get('/partials/:path', function(req, res) {
	res.render('partials/' + req.params.path);
});

/*
	a catch-all route handler to serve up the index page when a request is made to a path that the server does not handle

	The index page is served to the client where angular handles routing (as this is a single page application)
*/
app.get('*', function(req, res) {
	res.render('index');
});

var port = 8099;

app.listen(port);
console.log('Listening on port ' + port + '...');
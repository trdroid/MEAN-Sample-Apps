var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'DEV';

var app = express();

app.set('views', __dirname + '/server/views');

//configure the view engine
app.set('view engine', 'jade');

/*
	a catch-all route handler

	serve up an index page to the client and let angular take care of routing

	In case of typos in the routes, angular could hang, so
	an alternative approach is to make the server and the angular be aware of all the routes and be able to handle them
*/
app.get('*', function(req, res) {
	res.render('index');
});

var port = 8099;

app.listen(port);
console.log('Listening on port ' + port + '...');
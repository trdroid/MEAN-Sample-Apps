var express = require('express'),
	stylus = require('stylus'),
	bodyParser = require('body-parser'),
	morganLogger = require('morgan');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'DEV';

var app = express();

function compile(str, path) {
	return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');

//configure the view engine
app.set('view engine', 'jade');

/*
	setup the middleware for stylus by passing in configuration object
*/
app.use(stylus.middleware({
	src: __dirname + '/public',
	compile: compile
}));

app.use(morganLogger('dev'))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//setup static routing to the public directory
app.use(express.static(__dirname + '/public'));

/*
	a catch-all route handler

	serve up an index page to the client and let angular take care of routing

	In case of typos in the routes, angular could hang.
	An alternative approach is to make the server and the angular be aware of all the routes and be able to handle them
*/
app.get('*', function(req, res) {
	res.render('index');
});

var port = 8099;

app.listen(port);
console.log('Listening on port ' + port + '...');
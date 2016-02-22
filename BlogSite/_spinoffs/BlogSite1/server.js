var express = require('express');

var env = process.env.NODE_ENV = 'DEV';

var app = express();

var config = require('./server/config/config')[env];

app.use(function(req, res, next) {
	console.log("URL Requested:" + req.url);
	console.log("req.user is: " + req.user);
	next();
});

require('./server/config/init')(app, config);

app.use(function(req, res, next) {
	console.log("0. req.user is: " + req.user);
	next();
});

require('./server/config/mongoose')(config);

app.use(function(req, res, next) {
	console.log("1. req.user is: " + req.user);
	next();
});

require('./server/config/passport')(); 

app.use(function(req, res, next) {
	console.log("2. req.user is: " + req.user);
	console.log("-----------------------------------");
	next();
});

require('./server/config/routes')(app);

app.listen(config.port);
console.log('Listening on port ' + config.port + '...');

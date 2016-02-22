var express = require('express'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	passport = require('passport');

module.exports = function(app, config) {
	/*
		set the views property to the path where the views are located
	*/
	app.set('views', config.rootPath + '/server/views');

	/*
		configure the view engine
	*/	
	app.set('view engine', 'jade');

	/*
		cookieParser has to added before bodyParser

		The following is needed to configure passport
			as stated in http://passportjs.org/docs/configure
	*/
app.use(function(req, res, next) {
	console.log("a. req.user is: " + req.user);
	next();
});	
	app.use(cookieParser());

app.use(function(req, res, next) {
	console.log("b. req.user is: " + req.user);
	next();
});	

	app.use(bodyParser());

app.use(function(req, res, next) {
	console.log("c. req.user is: " + req.user);
	next();
});	

	app.use(session({secret: 'blogsite best Android apps'}));

app.use(function(req, res, next) {
	console.log("d. req.user is: " + req.user);
	next();
});	

	app.use(passport.initialize());

app.use(function(req, res, next) {
	console.log("e. req.user is: " + req.user);
	next();
});	

	app.use(passport.session());

app.use(function(req, res, next) {
	console.log("f. req.user is: " + req.user);
	next();
});	


	/*
		setup static routing to the public directory (BlogSite/public) by using express's static middleware
	*/
	app.use(express.static(config.rootPath + '/public'));	
}

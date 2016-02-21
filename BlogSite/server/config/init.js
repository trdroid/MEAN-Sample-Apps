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
	app.use(cookieParser());
	app.use(bodyParser());
	app.use(session({secret: 'blogsite best Android apps'}));
	app.use(passport.initialize());
	app.use(passport.session());

	/*
		setup static routing to the public directory (BlogSite/public) by using express's static middleware
	*/
	app.use(express.static(config.rootPath + '/public'));	
}

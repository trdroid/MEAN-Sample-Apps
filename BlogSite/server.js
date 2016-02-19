var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'DEV';

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/init')(app, config);

require('./server/config/mongoose')(config);

require('./server/config/passport')();

require('./server/config/routes')(app);

app.listen(config.port);
console.log('Listening on port ' + config.port + '...');

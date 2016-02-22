var path = require('path');
var rootPath = path.normalize(__dirname + "/../../");

module.exports = {
	DEV: {
		rootPath: rootPath,
		connectionString: 'mongodb://localhost/blogsite',
		port: process.env.PORT || 8099
	}
}
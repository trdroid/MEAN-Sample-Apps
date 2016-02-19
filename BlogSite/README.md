
> $ which node

    /home/droid/software/node/node-v4.2.2-linux-x64/bin/node

> $ node -v

    v4.2.2

> $ which npm

    /home/droid/software/node/node-v4.2.2-linux-x64/bin/npm

> $ droid@droidserver:~/onGit/MEAN$ npm -v

    2.14.7

### Create the project directory

> mkdir BlogSite

> cd BlogSite

> BlogSite$ npm init

    This utility will walk you through creating a package.json file.
    It only covers the most common items, and tries to guess sensible defaults.
    
    See `npm help json` for definitive documentation on these fields
    and exactly what they do.
    
    Use `npm install <pkg> --save` afterwards to install a package and
    save it as a dependency in the package.json file.
    
    Press ^C at any time to quit.
    name: (BlogSite) 
    Sorry, name can no longer contain capital letters.
    name: (BlogSite) blogsite
    version: (1.0.0) 
    description: A sample blogs site
    entry point: (index.js) 
    test command: 
    git repository: 
    keywords: 
    author: gruprog
    license: (ISC) 
    About to write to /home/droid/onGit/MEAN/BlogSite/package.json:
    
    {
      "name": "blogsite",
      "version": "1.0.0",
      "description": "A sample blogs site",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "gruprog",
      "license": "ISC"
    }
    
    
    Is this ok? (yes) 

Notice from above: name cannot contain capital letters 

This created BlogSite/package.json file

```json
{
  "name": "blogsite",
  "version": "1.0.0",
  "description": "A sample blogs site",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "gruprog",
  "license": "ISC"
}
```

### Install required modules

Get Express and Jade 

> BlogSite$ npm install --save express jade

    npm WARN package.json blogsite@1.0.0 No repository field.
    npm WARN package.json blogsite@1.0.0 No README data
    express@4.13.4 node_modules/express
    ├── utils-merge@1.0.0
    ├── cookie-signature@1.0.6
    ├── parseurl@1.3.1
    ├── escape-html@1.0.3
    ├── array-flatten@1.1.1
    ├── content-type@1.0.1
    ├── methods@1.1.2
    ├── merge-descriptors@1.0.1
    ├── vary@1.0.1
    ├── content-disposition@0.5.1
    ├── etag@1.7.0
    ├── cookie@0.1.5
    ├── path-to-regexp@0.1.7
    ├── fresh@0.3.0
    ├── range-parser@1.0.3
    ├── serve-static@1.10.2
    ├── depd@1.1.0
    ├── qs@4.0.0
    ├── finalhandler@0.4.1 (unpipe@1.0.0)
    ├── on-finished@2.3.0 (ee-first@1.1.1)
    ├── debug@2.2.0 (ms@0.7.1)
    ├── proxy-addr@1.0.10 (forwarded@0.1.0, ipaddr.js@1.0.5)
    ├── send@0.13.1 (destroy@1.0.4, statuses@1.2.1, ms@0.7.1, mime@1.3.4, http-errors@1.3.1)
    ├── type-is@1.6.11 (media-typer@0.3.0, mime-types@2.1.9)
    └── accepts@1.2.13 (negotiator@0.5.3, mime-types@2.1.9)
    
    jade@1.11.0 node_modules/jade
    ├── commander@2.6.0
    ├── character-parser@1.2.1
    ├── void-elements@2.0.1
    ├── mkdirp@0.5.1 (minimist@0.0.8)
    ├── constantinople@3.0.2 (acorn@2.7.0)
    ├── jstransformer@0.0.2 (is-promise@2.1.0, promise@6.1.0)
    ├── with@4.0.3 (acorn@1.2.2, acorn-globals@1.0.9)
    ├── transformers@2.1.0 (promise@2.0.0, css@1.0.8, uglify-js@2.2.5)
    ├── clean-css@3.4.9 (source-map@0.4.4, commander@2.8.1)
    └── uglify-js@2.6.1 (async@0.2.10, uglify-to-browserify@1.0.2, source-map@0.5.3, yargs@3.10.0)


Installing express and jade with the --save flag allowed them to be added to the dependencies block in the BlogSite/package.json file

```json
{
  "name": "blogsite",
  "version": "1.0.0",
  "description": "A sample blogs site",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "gruprog",
  "license": "ISC",
  "dependencies": {
    "express": "^4.13.4",
    "jade": "^1.11.0"
  }
}
```

Get Bower

Bower is used to install client-side dependencies. Install it globally or as a development ONLY dependency, as it is not required in production. 

> $ npm install bower -g

(or)

> $ npm install bower --save-dev

> BlogSite$ npm install bower --save-dev

        npm WARN package.json blogsite@1.0.0 No repository field.
        bower@1.7.7 node_modules/bower

Notice that bower is added to the devDependencies block of BlogSite/package.json file which implies a development ONLY dependency.

```json
{
  "name": "blogsite",
  "version": "1.0.0",
  "description": "A sample blogs site",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "gruprog",
  "license": "ISC",
  "dependencies": {
    "express": "^4.13.4",
    "jade": "^1.11.0"
  },
  "devDependencies": {
    "bower": "^1.7.7"
  }
}
```

Notice the dependencies under <i>BlogSite/node_modules</i>

<img src="_misc/dependencies%20in%20node_module.png"/>

### Install client-side dependencies

Create folder <i>BlogSite/public</i> to host client-side dependencies.

Create BlogSite/.bowerrc file to specify bower where to install client-side dependencies 

<i>BlogSite/.bowerrc</i>

Define an object with the key "directory" specifying where to install client-side dependencies 

```json
{
	"directory" : "public/vendor"
}
```

<b> Create bower.json file </b>

Creates bower.json file by running <i>bower init</i> to hold information about client-side dependencies.

> BlogSite$ ./node_modules/.bin/bower init

    ? name blogsite
    ? description A sample blogs site
    ? main file index.js
    ? what types of modules does this package expose? 
    ? keywords 
    ? authors gruprog
    ? license ISC
    ? homepage https://github.com/gruprog/MEAN-Examples
    ? set currently installed components as dependencies? No
    ? add commonly ignored files to ignore list? No
    ? would you like to mark this package as private which prevents it from being accidentally published to the registry? Yes
    
    {
      name: 'blogsite',
      description: 'A sample blogs site',
      main: 'index.js',
      authors: [
        'gruprog'
      ],
      license: 'ISC',
      homepage: 'https://github.com/gruprog/MEAN-Examples',
      moduleType: [],
      private: true
    }
    
    ? Looks good? Yes

<i>BlogSite/bower.json</i>

```json
{
  "name": "blogsite",
  "description": "A sample blogs site",
  "main": "index.js",
  "authors": [
    "gruprog"
  ],
  "license": "ISC",
  "homepage": "https://github.com/gruprog/MEAN-Examples",
  "moduleType": [],
  "private": true
}
```

<b> Install client-side dependencies </b>

Install 'toastr' for client-side notifications

> BlogSite$ ./node_modules/.bin/bower install toastr --save

    bower toastr#*              not-cached git://github.com/johnpapa/toastr-bower.git#*
    bower toastr#*                 resolve git://github.com/johnpapa/toastr-bower.git#*
    bower toastr#*                download https://github.com/johnpapa/toastr-bower/archive/2.1.2.tar.gz
    bower toastr#*                 extract archive.tar.gz
    bower toastr#*            invalid-meta toastr is missing "ignore" entry in bower.json
    bower toastr#*                resolved git://github.com/johnpapa/toastr-bower.git#2.1.2
    bower jquery#>=1.6.3        not-cached git://github.com/jquery/jquery-dist.git#>=1.6.3
    bower jquery#>=1.6.3           resolve git://github.com/jquery/jquery-dist.git#>=1.6.3
    bower jquery#>=1.6.3          download https://github.com/jquery/jquery-dist/archive/2.2.0.tar.gz
    bower jquery#>=1.6.3           extract archive.tar.gz
    bower jquery#>=1.6.3          resolved git://github.com/jquery/jquery-dist.git#2.2.0
    bower toastr#^2.1.2            install toastr#2.1.2
    bower jquery#>=1.6.3           install jquery#2.2.0
    
    toastr#2.1.2 public/vendor/toastr
    └── jquery#2.2.0
    
    jquery#2.2.0 public/vendor/jquery

Install jquery

> BlogSite$ ./node_modules/.bin/bower install jquery --save

    bower jquery#*                  cached git://github.com/jquery/jquery-dist.git#2.2.0
    bower jquery#*                validate 2.2.0 against git://github.com/jquery/jquery-dist.git#*

Install angular and its modules

> BlogSite$ ./node_modules/.bin/bower install angular angular-resource angular-route --save

    bower angular#*             not-cached git://github.com/angular/bower-angular.git#*
    bower angular#*                resolve git://github.com/angular/bower-angular.git#*
    bower angular-resource#*    not-cached git://github.com/angular/bower-angular-resource.git#*
    bower angular-resource#*       resolve git://github.com/angular/bower-angular-resource.git#*
    bower angular-route#*       not-cached git://github.com/angular/bower-angular-route.git#*
    bower angular-route#*          resolve git://github.com/angular/bower-angular-route.git#*
    bower angular-route#*         download https://github.com/angular/bower-angular-route/archive/v1.5.0.tar.gz
    bower angular#*               download https://github.com/angular/bower-angular/archive/v1.5.0.tar.gz
    bower angular-resource#*      download https://github.com/angular/bower-angular-resource/archive/v1.5.0.tar.gz
    bower angular-route#*          extract archive.tar.gz
    bower angular-route#*         resolved git://github.com/angular/bower-angular-route.git#1.5.0
    bower angular#1.5.0         not-cached git://github.com/angular/bower-angular.git#1.5.0
    bower angular#1.5.0            resolve git://github.com/angular/bower-angular.git#1.5.0
    bower angular#1.5.0           download https://github.com/angular/bower-angular/archive/v1.5.0.tar.gz
    bower angular-resource#*       extract archive.tar.gz
    bower angular-resource#*      resolved git://github.com/angular/bower-angular-resource.git#1.5.0
    bower angular#*                extract archive.tar.gz
    bower angular#*               resolved git://github.com/angular/bower-angular.git#1.5.0
    bower angular#1.5.0            extract archive.tar.gz
    bower angular#1.5.0           resolved git://github.com/angular/bower-angular.git#1.5.0
    bower angular-route#^1.5.0     install angular-route#1.5.0
    bower angular-resource#^1.5.0  install angular-resource#1.5.0
    bower angular#1.5.0            install angular#1.5.0
    
    angular-route#1.5.0 public/vendor/angular-route
    └── angular#1.5.0
    
    angular-resource#1.5.0 public/vendor/angular-resource
    └── angular#1.5.0
    
    angular#1.5.0 public/vendor/angular

Explore the updated bower.json file

<i>BlogSite/bower.json</i>

```json
{
  "name": "blogsite",
  "description": "A sample blogs site",
  "main": "index.js",
  "authors": [
    "gruprog"
  ],
  "license": "ISC",
  "homepage": "https://github.com/gruprog/MEAN-Examples",
  "moduleType": [],
  "private": true,
  "dependencies": {
    "toastr": "^2.1.2",
    "jquery": "^2.2.0",
    "angular": "^1.5.0",
    "angular-resource": "^1.5.0",
    "angular-route": "^1.5.0"
  }
}
```

Explore the project structure to find the client-side dependencies under public/vendor directory

<i>BlogSite/public/vendor</i>

<img src="_misc/installed%20client-side%20dependencies.png"/>


### Starting with E & N in MEAN

<b>Create the server code in <i>BlogSite/server.js</i></b>

```javascript
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
	a catch-all route handler matches all routes and serves up the index page (/servers/views/index.jade)
*/
app.get('*', function(req, res) {
	res.render('index');
});

var port = 8099;

app.listen(port);
console.log('Listening on port ' + port + '...');
```

The catch-all route handler (with '*' in get) matches all routes. The purpose of this route handler is to serve up the index page 
(/servers/views/index.jade) for any request that the server does not have a route handler for. 

Any request (for JavaScript, CSS, images etc.) that is not handled by any route handler defined before the catch-all route handler gets handled by the catch-all route handler, which serves the index page (/servers/views/index.jade) to the client.

This is done to avoid setting up the same routes on both the client and the server side. The client can be programmed to handle routing (with angular) without having to coordinate with the server. For the routes that the server does not handle, it simply serves up the index page to the client which handles the routing. It then becomes the client's responsibility to handle 404 cases. 

For example, when a client requests for /blogs, the server serves the index page as it is not defined to handle that route. This allows the client-side to handle that route to show appropriate content. 

<i>Risks Involved</i>

Imagine if there is a typo in one of the routes, this setup would end up with Angular hanging or resulting in the infinite digests error message.

A solution is to use an approach where every route handled by the client is also handled by the server. 

<b>Next Steps</b>

Create <i>BlogSite/server/views</i> to house the views

Create <i>BlogSite/server/views/index.jade</i> for the index page

```jade
doctype
html
	body
		h1 Welcome
```

### Project Structure

<img src="_misc/server%20app%20and%20server%20views%20project%20structure.png"/>

### Install nodemon globally

> /BlogSite$ npm install nodemon -g

	nodemon@1.8.1 /home/droid/software/node/node-v4.2.2-linux-x64/lib/node_modules/nodemon
	├── undefsafe@0.0.3
	├── es6-promise@3.0.2
	├── debug@2.2.0 (ms@0.7.1)
	├── minimatch@3.0.0 (brace-expansion@1.1.3)
	├── touch@1.0.0 (nopt@1.0.10)
	├── lodash.defaults@3.1.2 (lodash.restparam@3.6.1, lodash.assign@3.2.0)
	├── ps-tree@1.0.1 (event-stream@3.3.2)
	├── update-notifier@0.5.0 (is-npm@1.0.0, semver-diff@2.1.0, string-length@1.0.1, chalk@1.1.1, repeating@1.1.3, configstore@1.4.0, latest-version@1.0.1)
	└── chokidar@1.4.2 (path-is-absolute@1.0.0, inherits@2.0.1, async-each@0.1.6, glob-parent@2.0.0, is-glob@2.0.1, is-binary-path@1.0.1, readdirp@2.0.0, anymatch@1.3.0)

### Run the application

> BlogSite$nodemon server.js

	[nodemon] 1.8.1
	[nodemon] to restart at any time, enter `rs`
	[nodemon] watching: *.*
	[nodemon] starting `node server.js`
	Listening on port 8099...

### In the Browser

<img src="_misc/initial%20step%20in%20the%20browser.png"/>

### Organizing view in layouts

<img src="_misc/initial%20layouts.png"/>

1) index.jade extends layouts/main_layout.jade, which provides a general layout which can be extended to provide view-specific content.

2) layouts/main_layout.jade defines a <i>block</i> called "main-content" which other layouts that extends this layout can redefine with the view-specific content which replaces the <i>block</i> in layouts/main_layout.jade

index.jade extends layouts/main_layout.jade and provides its view-specific content which replaces the <i>block</i> in layouts/main_layout.jade

3) In layouts/main_layout.jade, the <i>include</i> followed by another layout's name "scripts.jade" includes the content of the layout "scripts.jade" in layouts/main_layout.jade

Each <i>script</i> entry in "script.jade" layout results in a request to the server, so our server.js app should be able to handle the requests to these static files. 

To handle this, setup static route to the public directory (BlogSite/public) in <i>BlogSite/server.js</i> by using express's static middleware

```javascript
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
app.use(express.static(__dirname + '/public'));  <-----------------------

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
```

Now, when the server receives a request to /vendor/angular/angular.js, the static middleware it is configured with attempts to find it under BlogSite/public directory i.e. it looks for the file BlogSite/public/vendor/angular/angular.js and returns it to the client.

### In the Browser

Check in the browser to see if the scripts are being loaded 

<img src="_misc/in%20browser%20with%20scripts%20delivered.png"/>

### Flow

<img src="_misc/entire%20flow%201.png"/>

### Starting with A in MEAN

Create a folder <i>BlogSite/public/client</i> to host the angular application files.

Create <i>BlogSite/public/client/app.js</i>, which is the entry point of the Angular application.

Create a module 'app' in <i>BlogSite/public/client/app.js</i>

```javascript
/*
	The main entry point to the Angular application

	define module 'app' that depends on ngResource and ngRoute modules
*/

angular.module('app', ['ngResource', 'ngRoute']);

/*
	Define the client-side routes by calling the config function and requiring $routeProvider and $locationProvider
*/
angular.module('app').config(function($routeProvider, $locationProvider) {
	/*
		use $locationProvider to turn on HTML5 mode for routing

		With recent versions of Angular, the head tag requires a base tag base(href="/") for routing to work properly.

		so, server/layouts/main_layout.jade would look like:

		doctype
		html
			head
				base(href="/")  <-----------
			body
				block main-content
				include scripts	
	*/
	$locationProvider.html5Mode(true);

	/*
		Use $routeProvider to define the routes
	*/

	$routeProvider
		.when('/', { templateUrl: 'partials/root', controller: 'mainController'});
		/* 
			when the routing system determines that the value of location.path() is '/', it will inject the template 'partials/root' 
			(or more precisely, it makes an XHR request to partials/root and injects its response)
			into the ngView directive and makes 'mainController' its controller
		*/
});

angular.module('app').controller('mainController', function($scope) {
	$scope.title = "My First Blog";
	$scope.content = "Welcome to my first blog";
});
```

When the angular app is loaded, it makes an XHR request to the server. 

Add ng-app to <i>BlogSite/server/layouts/main_layout.jade</i>

```jade
doctype
html
	head
		base(href="/")
	body(ng-app='app')           --------------
		block main-content
		include scripts
```

Add ng-view to <i>BlogSite/server/views/index.jade</i>

```jade
extends ../layouts/main_layout

block main-content
	div(ng-view)         ----------
```

Add app.js to <i>BlogSite/server/layouts/scripts.jade</i>

```jade
script(type="text/javascript", src="/vendor/jquery/dist/jquery.js")
script(type="text/javascript", src="/vendor/angular/angular.js")
script(type="text/javascript", src="/vendor/angular-resource/angular-resource.js")
script(type="text/javascript", src="/vendor/angular-route/angular-route.js")
script(type="text/javascript", src="/client/app.js")  <------------------------------
```

<b> Changes in the server app </b>

The server has to handle the request to <i>partials/root</i> made from the angular app.

```javascript
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
app.get('/partials/:path', function(req, res) {             <--------------------
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
```

Create <i>BlogSite/server/views/partials/root.jade</i> that will be served to the angular app's XHR.

```jade
h1 {{ title }}

p {{ content }}
```

<b> Changes included </b>

<img src="_misc/new%20files%20with%20angular%20app%20and%20partials.png"/>

### Flow

<img src="_misc/entire%20flow%202.png"/>

### Starting with M in MEAN

Install mongoose 

> BlogSite$ npm install mongoose --save

	npm WARN package.json blogsite@1.0.0 No repository field.
	mongoose@4.4.3 node_modules/mongoose
	├── sliced@1.0.1
	├── hooks-fixed@1.1.0
	├── ms@0.7.1
	├── regexp-clone@0.0.1
	├── muri@1.1.0
	├── mpromise@0.5.5
	├── async@1.5.2
	├── kareem@1.0.1
	├── mpath@0.2.1
	├── bson@0.4.21
	├── mquery@1.6.3 (debug@2.2.0, sliced@0.0.5, bluebird@2.9.26)
	└── mongodb@2.1.6 (es6-promise@3.0.2, readable-stream@1.0.31, mongodb-core@1.3.1)

Notice the dependency added to <i>BlogSite/package.json</i>

```json
{
  "name": "blogsite",
  "version": "1.0.0",
  "description": "A sample blogs site",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "gruprog",
  "license": "ISC",
  "dependencies": {
    "express": "^4.13.4",
    "jade": "^1.11.0",
    "mongoose": "^4.4.3" 
  },
  "devDependencies": {
    "bower": "^1.7.7"
  }
}
```

<b> Changes to server app </b>

```javascript
var express = require('express'),
	mongoose = require('mongoose');   <-------------------

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
			<-------------------------------------------------
/*
	connect to blogsite database on the local mongoDB server
*/
mongoose.connect('mongodb://localhost/blogsite');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Failed to connect. Error occurred ...'));

db.once('open', function() {
	console.log('Connected to blogsite database');
});
			<-------------------------------------------------
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
```

<b>Verify the nodemon console</b>

Check the nodemon console for the console messages to see if the connection to database was successful.

	[nodemon] restarting due to changes...
	[nodemon] starting `node server.js`
	Listening on port 8099...
	Connected to blogsite database


<b>Create a schema and a model</b>

Create a schema and a model ("Blog") from it to read a document from the "blogs" collection in the "blogsite" database.

Read the document and pass its attributes to "index.jade" to display them to the client.

```javascript
var express = require('express'),
	mongoose = require('mongoose');

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

mongoose.connect('mongodb://localhost/blogsite');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Failed to connect. Error occurred ...'));

db.once('open', function() {
	console.log('Connected to blogsite database');
});
<------------------------------------
/*
	Create a schema for blogs

	Column names and Column types
*/
var blogSchema = mongoose.Schema({
		title: String, 
		content: String
	});


/*
	Create a Blog model out of blogSchema

	Pass in the collection name and the schema

	Mongoose processes the collection name i.e. 
		it makes the first letter small and 
		pluralizes the collection name
	to represent the collection in the database
	
	so, the collection name "Blog" represents "blogs" in the "blogsite" database
*/
var Blog = mongoose.model('Blog', blogSchema);

var firstBlog;

/*
	Get the first document from the "blogs" collection

	findOne() without any parameters returns the first document in the collection.
	findOne() can be specified to execute a callback function on data return using the exec() method 
		by passing in the callback to execute

	The callback is passed two arguments: error if any and the first document in the collection
*/
Blog.findOne().exec(function(err, blogEntry) {
	firstBlog = blogEntry;
});
<------------------------------------
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
	/*
		The following did not work

		blogEntry: firstBlog

		Tried passing a model object to index.jade and tried accessing title and content properties as
			blogEntry.title and blogEntry.content in index.jade, which resulted in an error			
	*/

	/*
		pass an object with title and content properties to index.jade
	*/
	res.render('index', {          <------------------------------
		title: firstBlog.title,
		content: firstBlog.content
	});
});

var port = 8099;

app.listen(port);
console.log('Listening on port ' + port + '...');
```

<b> Changing <i>BlogSite/server/views/index.jade</i> </b>

Include the attributes of the first blog (title and content) in the output

```jade
extends ../layouts/main_layout

block main-content
	div(ng-view)
	h2= title
	h2= content	
```

<b> Creating an entry in MongoDB </b>

Because server.js attempts to find a document from the "blogs" collection in the "blogsite" database, create an entry in the database.

> $ mongo

	MongoDB shell version: 3.2.1
	connecting to: test
	Server has startup warnings: 
	2016-02-13T22:35:01.282-0500 I CONTROL  [initandlisten] 
	2016-02-13T22:35:01.282-0500 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/mm/transparent_hugepage/enabled is 'always'.
	2016-02-13T22:35:01.282-0500 I CONTROL  [initandlisten] **        We suggest setting it to 'never'
	2016-02-13T22:35:01.282-0500 I CONTROL  [initandlisten] 
	2016-02-13T22:35:01.282-0500 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/mm/transparent_hugepage/defrag is 'always'.
	2016-02-13T22:35:01.282-0500 I CONTROL  [initandlisten] **        We suggest setting it to 'never'
	2016-02-13T22:35:01.282-0500 I CONTROL  [initandlisten] 

Switch to "blogsite" database and create an entry in the "blogs" table.

	> use blogsite
	switched to db blogsite
	> db.blogs.insert({title: 'My First Blog Ever', content: 'Welcome! Thank you for visiting my blog!'})
	WriteResult({ "nInserted" : 1 })
	> db.blogs.find()
	{ "_id" : ObjectId("56c22492c74024b8af7c761c"), "title" : "My First Blog Ever", "content" : "Welcome! Thank you for visiting my blog!" }
	> 

### In Browser

<img src="_misc/passing%20first%20blog%20to%20index.png"/>

<hr>

# Implementing Login

### Creating default users

Remove earlier schema and model for blogs and also the first object being passed to index.jade. 

Create schema and model for users.

Check to see if users exist in the "users" collection in the "blogsite" database. If not, create default users.

```javascript
var express = require('express'),
	mongoose = require('mongoose');

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
	connect to blogsite database on the local mongoDB server
*/
mongoose.connect('mongodb://localhost/blogsite');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Failed to connect. Error occurred ...'));

db.once('open', function() {
	console.log('Connected to blogsite database');
});

/*
	Create a schema for users

	Column names and Column types
*/
var userSchema = mongoose.Schema({
		username: String,
		firstName: String, 
		lastName: String,		
	});

<-------------------------------------------------------------
/*
	Create a User model out of userSchema

	Pass in the collection name and the schema

	Mongoose processes the collection name i.e. 
		it makes the first letter small and 
		pluralizes the collection name
	to represent the collection in the database
	
	so, the collection name "User" represents "users" in the "blogsite" database
*/
var User = mongoose.model('User', userSchema);

var firstBlog;

/*
	Get all the documents from "users" collection by using the find() method on the "User" model

	If there is no user collection, create default users
*/
User.find({}).exec(function(err, userCollection) {
	if(userCollection.length == 0) {
		/*
			MAKE SURE THAT THE ATTRIBUTE NAMES OF DOCUMENT PASSED TO create() MATCHES WITH ATTRIBUTE NAMES
			PASSED TO mongoose.Schema

			Any typos would mean missing data.

			For example, if the schema is defined with username as one of its attributes,
				then passing userName (notice N is caps here) to create() method results in the actual 
				userName attribute unfilled for that document
		*/
		User.create({username: 'blackberry', firstName: 'Rim', lastName: 'blackberry'});
		User.create({username: 'android', firstName: 'Alphabet', lastName: 'Google'});
		User.create({username: 'iphone', firstName: 'Swift', lastName: 'ObjectiveC'});
	}
});
<-------------------------------------------------------------
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
	/*
		The following did not work

		blogEntry: firstBlog

		Tried passing a model object to index.jade and tried accessing title and content properties as
			blogEntry.title and blogEntry.content in index.jade, which resulted in an error				
	*/

	/*
		pass an object with title and content properties to index.jade
	*/
	res.render('index');   <----------------------
});

var port = 8099;

app.listen(port);
console.log('Listening on port ' + port + '...');
```

### Verify the database

As soon as the file is saved, nodemon runs it ending up creating default users. Check the database to see if the users have been created.

	> db.users.find()
	{ "_id" : ObjectId("56c274a8f029d24e47b34ea0"), "username" : "blackberry", "firstName" : "Rim", "lastName" : "blackberry", "__v" : 0 }
	{ "_id" : ObjectId("56c274a8f029d24e47b34ea2"), "username" : "iphone", "firstName" : "Swift", "lastName" : "ObjectiveC", "__v" : 0 }
	{ "_id" : ObjectId("56c274a8f029d24e47b34ea1"), "username" : "android", "firstName" : "Alphabet", "lastName" : "Google", "__v" : 0 }

### Creating a form

As soon as <i>BlogSite/public/client/app.js</i> (our angular app) loads in the browser, an XHR is made to /partials/root which renders <i>BlogSite/server/views/partials/root.jade</i>. Modify <i>BlogSite/server/views/partials/root.jade</i> to contain a login form to send to the browser.

<i>BlogSite/server/views/partials/root.jade</i>

Clean up <i>BlogSite/server/views/index.jade</i> to contain

```jade
extends ../layouts/main_layout

block main-content
	div(ng-view)
```

Create a form with a username input and password fields associated with "username" and "password" models in the scope of the controller.

Create a "signin" button associated with an event handler "signin" that passes values of "username" and "password" models in the scope of the controller.

```jade
form
	input(placeholder="username", ng-model="username")
	input(type="password", placeholder="Password", ng-model="password")
	button(ng-click="signin(username, password)") Sign In
```

Assign an event handler to the "signin" button in "mainController" controller defined in the angular app <i>BlogSite/public/client/app.js</i>.

Now, the "mainController" has three entities in its scope, username, password and signin.

On clicking the "signin" button, a POST request is made to /signin and the response is verified. 

```javascript
/*
	The main entry point to the Angular application

	define module 'app' that depends on ngResource and ngRoute modules
*/

angular.module('app', ['ngResource', 'ngRoute']);

/*
	Define the client-side routes by calling the config function and requiring $routeProvider and $locationProvider
*/
angular.module('app').config(function($routeProvider, $locationProvider) {
	/*
		use $locationProvider to turn on HTML5 mode for routing

		With recent versions of Angular, the head tag requires a base tag base(href="/") for routing to work properly.

		so, server/layouts/main_layout.jade would look like:

		doctype
		html
			head
				base(href="/")  <-----------
			body
				block main-content
				include scripts	
	*/
	$locationProvider.html5Mode(true);

	/*
		Use $routeProvider to define the routes
	*/

	$routeProvider
		.when('/', { templateUrl: 'partials/root', controller: 'mainController'});
		/* 
			when the routing system determines that the value of location.path() is '/', it will inject the template 'partials/root' 
			(or more precisely, it makes an XHR request to partials/root and injects its response)
			into the ngView directive and makes 'mainController' its controller
		*/
});

angular.module('app').controller('mainController', function($scope, $http) {
	$scope.signin = function(username, password) {        <--------------------------------
   ---------->  $http.post('/signin', {username: username, password: password}).then(function (response) {
			if(response.data.success) {
				console.log('Signed in');
			} else {
				console.log('Failed to sign in');
			}
		});
	}
});
```

### In Browser

<img src="_misc/login%20form%20in%20browser.png"/>

### Installing necessary modules

> BlogSite$ npm install passport passport-local --save

	npm WARN package.json blogsite@1.0.0 No repository field.
	passport-local@1.0.0 node_modules/passport-local
	└── passport-strategy@1.0.0
	
	passport@0.3.2 node_modules/passport
	├── passport-strategy@1.0.0
	└── pause@0.0.1

> BlogSite$ npm install cookie-parser body-parser express-session --save

	npm WARN package.json blogsite@1.0.0 No repository field.
	cookie-parser@1.4.1 node_modules/cookie-parser
	├── cookie-signature@1.0.6
	└── cookie@0.2.3
	
	express-session@1.13.0 node_modules/express-session
	├── cookie-signature@1.0.6
	├── utils-merge@1.0.0
	├── parseurl@1.3.1
	├── on-headers@1.0.1
	├── cookie@0.2.3
	├── depd@1.1.0
	├── crc@3.4.0
	├── uid-safe@2.0.0 (base64-url@1.2.1)
	└── debug@2.2.0 (ms@0.7.1)
	
	body-parser@1.15.0 node_modules/body-parser
	├── bytes@2.2.0
	├── content-type@1.0.1
	├── depd@1.1.0
	├── qs@6.1.0
	├── iconv-lite@0.4.13
	├── raw-body@2.1.5 (unpipe@1.0.0)
	├── on-finished@2.3.0 (ee-first@1.1.1)
	├── http-errors@1.4.0 (statuses@1.2.1, inherits@2.0.1)
	├── debug@2.2.0 (ms@0.7.1)
	└── type-is@1.6.11 (media-typer@0.3.0, mime-types@2.1.10)

### Changes to server app

```javascript
var express = require('express'),
	mongoose = require('mongoose'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	/*
		passport implements authentication as strategies

		passport-local's strategy allows authentication by means of usernames and password that can be stored in our own database
	*/
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;

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
app.use(express.static(__dirname + '/public'));

/*
	connect to blogsite database on the local mongoDB server
*/
mongoose.connect('mongodb://localhost/blogsite');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Failed to connect. Error occurred ...'));

db.once('open', function() {
	console.log('Connected to blogsite database');
});

/*
	Create a schema for users

	Column names and Column types
*/
var userSchema = mongoose.Schema({
		username: String,
		firstName: String, 
		lastName: String,		
	});


/*
	Create a User model out of userSchema

	Pass in the collection name and the schema

	Mongoose processes the collection name i.e. 
		it makes the first letter small and 
		pluralizes the collection name
	to represent the collection in the database
	
	so, the collection name "User" represents "users" in the "blogsite" database
*/
var User = mongoose.model('User', userSchema);

var firstBlog;

/*
	Get all the documents from "users" collection by using the find() method on the "User" model

	If there is no user collection, create default users
*/
User.find({}).exec(function(err, userCollection) {
	if(userCollection.length == 0) {
		/*
			MAKE SURE THAT THE ATTRIBUTE NAMES OF DOCUMENT PASSED TO create() MATCHES WITH ATTRIBUTE NAMES
			PASSED TO mongoose.Schema

			Any typos would mean missing data.

			For example, if the schema is defined with username as one of its attributes,
				then passing userName (notice N is caps here) to create() method results in the actual 
				userName attribute unfilled for that document
		*/
		User.create({username: 'blackberry', firstName: 'Rim', lastName: 'blackberry'});
		User.create({username: 'android', firstName: 'Alphabet', lastName: 'Google'});
		User.create({username: 'iphone', firstName: 'Swift', lastName: 'ObjectiveC'});
	}
});

<-------------------------------------------------------------
/*
	Configure passport to use LocalStrategy.

	Pass in a function to LocalStrategy
*/
passport.use(new LocalStrategy(
		function(username, password, done) {
			/*
				Implement custom code here to verify if the username and password are valid

				Use the "User" model defined earlier to verify if the username and password are valid

				Once the findOne() function returns, the callback registered with exec() function is executed.

				If the user exists in the database it is passed to the callback to the second parameter, else a null is passed. 
			*/

			User.findOne({username:username}).exec(function(err, user) {
				if(user) {
					return done(null, user);
				} else {
					return done(null, false);
				}
			});
		}		
	));

/*
	Let passport know how to serialize and deserialize user

	The serializeUser takes in a user and a done callback
*/
passport.serializeUser(function(user, done) {
	if(user) {
		/*
			if the user exists, call done by passing null and the user._id. The user._id passed here will be received in 
				passport.deserializeUser() method
		*/
		done(null, user._id);
	}
});

passport.deserializeUser(function(id, done) {
	/*
		Look up the User by id using findOne() method. The id passed here is the user._id sent from passport.serializeUser() function

		Register a callback by passing it to exec() function. The callback is executed after findOne() returns.

		Check in the callback if the user exists and call done
	*/
	User.findOne({_id:id}).exec(function(err, user) {
		if(user) {
			return done(null, user);
		} else {
			return done(null, false);
		}
	}) 
});

app.post('/signin', function(req, res, next) {
	/*
		specify passport.authenticate the strategy being used ('local' in this case)

		passport authenticate returns a function that needs to be called next
	*/
	var auth = passport.authenticate('local', function(err, user) {
		/*
			In case of an error, pass it on
		*/
		if(err) {
			return next(err);
		}

		/*
			if a user is not found, then the user parameter is given false by done(null, false)
				call in passport.use() method
		*/

		if(!user) {
			res.send({success: false});
		}

		/*
			if a user is found, then the user parameter is given the found user by done(null, user)
				call in passport.use() method,

			in which case, ask passport to log the user in by calling logIn() function on the request object.

			The logIn() function is added to the request object by passport.

			Calling req.logIn() is done for handling the login requests done via XHR
			if the login requests were handled by submitting a form, req.logIn() is called automatically
		*/

		req.logIn(user, function(err) {
			if(err) {
				return next(err);
			}

			/*
				if login was successful, send to the client a JSON object with success property as true indicating about successful login,
					and the user object in the user property
			*/
			res.send({success:true, user: user});
		});
	});

	/*
		call the auth function saved before
	*/
	auth(req, res, next);
});
<-------------------------------------------------------------
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
	/*
		The following did not work

		blogEntry: firstBlog

		Tried passing a model object to index.jade and tried accessing title and content properties as
			blogEntry.title and blogEntry.content in index.jade, which resulted in an error				
	*/

	/*
		pass an object with title and content properties to index.jade
	*/
	res.render('index');
});

var port = 8099;

app.listen(port);
console.log('Listening on port ' + port + '...');
```

### Check

> BlogSite$ nodemon server.js

	[nodemon] 1.8.1
	[nodemon] to restart at any time, enter `rs`
	[nodemon] watching: *.*
	[nodemon] starting `node server.js`
	body-parser deprecated bodyParser: use individual json/urlencoded middlewares server.js:33:9
	body-parser deprecated undefined extended: provide extended option node_modules/body-parser/index.js:105:29
	express-session deprecated undefined resave option; provide resave option server.js:34:9
	express-session deprecated undefined saveUninitialized option; provide saveUninitialized option server.js:34:9
	Listening on port 8099...
	Connected to blogsite database


<img src="_misc/successful%20signin.png"/>

<img src="_misc/failed%20to%20sign%20in.png"/>

### Organizing client-side code

Separate out the controller "mainController" from <i>BlogSite/public/client/app.js</i> to its own file.

For better organization, have a subfolder for each page under <i>BlogSite/public/client/</i>, which is the directory for the client-side app.

Create a sub-directory "home" to house the files associated with the home page.

Cut out the controller "mainController" and save it the file <i>BlogSite/public/client/home/mvMainController.js</i> (mv stands for multi-view and is a naming convention for files in the client application),as this controller is associated with the home page.

<i>BlogSite/public/client/home/mvMainController.js</i>

Also change the name of the controller to "mvMainController".

```javascript
angular.module('app').controller('mvMainController', function($scope, $http) {   <------------
	$scope.signin = function(username, password) {
		$http.post('/signin', {username: username, password: password}).then(function (response) {
			if(response.data.success) {
				console.log('Signed in');
			} else {
				console.log('Failed to sign in');
			}
		});
	}
});
```

Update the name of the controller in <i>BlogSite/public/client/app.js</i>

<i>BlogSite/public/client/app.js</i>

```javascript
/*
	The main entry point to the Angular application

	define module 'app' that depends on ngResource and ngRoute modules
*/

angular.module('app', ['ngResource', 'ngRoute']);

/*
	Define the client-side routes by calling the config function and requiring $routeProvider and $locationProvider
*/
angular.module('app').config(function($routeProvider, $locationProvider) {
	/*
		use $locationProvider to turn on HTML5 mode for routing

		With recent versions of Angular, the head tag requires a base tag base(href="/") for routing to work properly.

		so, server/layouts/main_layout.jade would look like:

		doctype
		html
			head
				base(href="/")  <-----------
			body
				block main-content
				include scripts	
	*/
	$locationProvider.html5Mode(true);

	/*
		Use $routeProvider to define the routes
	*/

	$routeProvider
		.when('/', { templateUrl: 'partials/root', controller: 'mvMainController'});  <---------------------
		/* 
			when the routing system determines that the value of location.path() is '/', it will inject the template 'partials/root' 
			(or more precisely, it makes an XHR request to partials/root and injects its response)
			into the ngView directive and makes 'mainController' its controller
		*/
});
```

Update to include the controller script to be delivered to the client in <i>BlogSite/server/layouts/scripts.jade</i>

<i>BlogSite/server/layouts/scripts.jade</i>

```jade
script(type="text/javascript", src="/vendor/jquery/dist/jquery.js")
script(type="text/javascript", src="/vendor/angular/angular.js")
script(type="text/javascript", src="/vendor/angular-resource/angular-resource.js")
script(type="text/javascript", src="/vendor/angular-route/angular-route.js")
script(type="text/javascript", src="/client/app.js")
script(type="text/javascript", src="/client/home/mvMainController.js")  <---------
```

### Organizing partials

Just like the client-side files, organize partials into sub-directories associated with the page they are being used in.

<i>BlogSite/server/views/partials/root.jade</i> is used in the home page, so place it under <i>BlogSite/server/views/partials/home/root.jade</i>

Update the path in <i>BlogSite/public/client/app.js</i> from partials/root to partials/home/root

<i>BlogSite/public/client/app.js</i>

```javascript
/*
	The main entry point to the Angular application

	define module 'app' that depends on ngResource and ngRoute modules
*/

angular.module('app', ['ngResource', 'ngRoute']);

/*
	Define the client-side routes by calling the config function and requiring $routeProvider and $locationProvider
*/
angular.module('app').config(function($routeProvider, $locationProvider) {
	/*
		use $locationProvider to turn on HTML5 mode for routing

		With recent versions of Angular, the head tag requires a base tag base(href="/") for routing to work properly.

		so, server/layouts/main_layout.jade would look like:

		doctype
		html
			head
				base(href="/")  <-----------
			body
				block main-content
				include scripts	
	*/
	$locationProvider.html5Mode(true);

	/*
		Use $routeProvider to define the routes
	*/

	$routeProvider
		.when('/', { templateUrl: 'partials/home/root', controller: 'mvMainController'});  <--------------------
		/* 
			when the routing system determines that the value of location.path() is '/', it will inject the template 'partials/root' 
			(or more precisely, it makes an XHR request to partials/root and injects its response)
			into the ngView directive and makes 'mainController' its controller
		*/
});
```

### Test Changes 

The app crashes!!!

<img src="_misc/error%20-%20tried%20to%20load%20angular%20more%20than%20once.png"/>

It is because the route to partials in the server app only handles requests for files immediately under <i>BlogSite/server/views/partials/</i>, but since the root.jade has been moved moved to a sub-directory under the  <i>BlogSite/server/views/partials/</i> directory, i.e. to <i>BlogSite/server/views/partials/home</i>, a request to root.jade is handled by the catch-all route.

A snippet from <i>BlogSite/server.js</i>

```javascript
/*
 cannot handle the request to partials/home/root, which then is handled by the catch-all route handler,
  as the route partials/home/root does not match the route /partials/:path 
*/ 
app.get('/partials/:path', function(req, res) {
	res.render('partials/' + req.params.path);
});

app.get('*', function(req, res) {
	res.render('index');
});

```

The catch-all route serves index.jade, which in turn requests for 'partials/home/root', which again does not match the route to partials and is handled by the catch-all route ... leading to an infinite request loop, which can be figured from the screenshot.

The solution is to add '*' after /partials to match all requests for files under /partials, and append req.params[0] to partials/ path.

A snippet from <i>BlogSite/server.js</i>

```javascript
/*
	The angular app sends XHR requests to /partials/*, which are handled here.

	For example, a request to /partials/home/root implies that req.params[0] is home/root, which then 
		attempts to render partials/home/root.jade. Since the views are configured to be found from /server/views
		directory, the file /server/views/partials/home/root.jade would be rendered
*/
app.get('/partials/*', function(req, res) {         <--------------------
	res.render('partials/' + req.params[0]);    <--------------------
});

app.get('*', function(req, res) {
	res.render('index');
});
```

Now, a request to 'partials/home/root' will match '/partials/\*' and is handled by the associated handler without falling to the catch-all handler. The '\*' captures everything after '/partials/' and req.params[0] will contain 'home/root', which when added to 'partials/' results in 'partials/home/root' within the render() function, which renders partials/home/root.jade. 


### Snapshot of new project structure

<img src="_misc/client%20home%20partials%20home%20project%20structure.png"/>

### Grouping client-side and partials structures 

It could be noticed from above that the client-side organization and the partials organization structures match, so they could be grouped under one structure.

Place the partials with the client-code they are associated with. 

Place "root.jade" with "mvMainController.js", as they both are associated with the same page, the home page.

Delete the "views/partials", as it is no longer needed, since we have decided to place the partials with their associated client-side code.

### Making appropriate changes to server app

The new path of partials have to be accommodated in the server app.

```javascript
/*
	The angular app sends XHR requests to /partials/*, which are handled here.

	For example, a request to /partials/home/root implies that req.params[0] is home/root, which then 
		attempts to render ../../public/client/home/root.jade. Since the views are configured to be found from /server/views
		directory, ../../ refers to projects root directory, so the file ../../public/client/home/root.jade refers to
		BlogSite/public/client/home/root.jade, which is what would be rendered
*/
app.get('/partials/*', function(req, res) {
	res.render('../../public/client/' + req.params[0]);
});

app.get('*', function(req, res) {
	res.render('index');
});
```

### Snapshot of new project structure

<img src="_misc/after%20keeping%20partials%20with%20client-side%20code.png"/>

### Adding to the user-interface

<b>Installing bootstrap</b>

> BlogSite$ bower install bootstrap --save

	bower bootstrap#*           not-cached git://github.com/twbs/bootstrap.git#*
	bower bootstrap#*              resolve git://github.com/twbs/bootstrap.git#*
	bower bootstrap#*             download https://github.com/twbs/bootstrap/archive/v3.3.6.tar.gz
	bower bootstrap#*              extract archive.tar.gz
	bower bootstrap#*             resolved git://github.com/twbs/bootstrap.git#3.3.6
	bower bootstrap#^3.3.6         install bootstrap#3.3.6
	
	bootstrap#3.3.6 public/vendor/bootstrap
	└── jquery#2.2.0

Notice the dependency added to bower.json

<i>BlogSite/bower.json</i>

```json
{
  "name": "blogsite",
  "description": "A sample blogs site",
  "main": "index.js",
  "authors": [
    "gruprog"
  ],
  "license": "ISC",
  "homepage": "https://github.com/gruprog/MEAN-Examples",
  "moduleType": [],
  "private": true,
  "dependencies": {
    "toastr": "^2.1.2",
    "jquery": "^2.2.0",
    "angular": "^1.5.0",
    "angular-resource": "^1.5.0",
    "angular-route": "^1.5.0",
    "bootstrap": "^3.3.6"   
  }
}
```

Add bootstrap.css to "main_layout.jade" file, so any .jade file that "extends" the main_layout file would include bootstrap.css

```jade
doctype
html
	head
		base(href="/")
		title BlogSite
		link(rel="stylesheet", href="/vendor/bootstrap/dist/css/bootstrap.css") ------
	body(ng-app='app')
		block main-content
		include scripts
```

Add the following to index.jade

```jade
extends ../layouts/main_layout

--------------
block main-content            
	.navbar.navbar-default
		.navbar-header
			a.navbar-brand(href='/') BlogSite			
--------------

	div(ng-view)
```

### In Browser

<img src="_misc/in%20browser%20with%20navbar.png"/>

<b>Adding navbar controls</b>

Define a partial with navbar controls and send a request to a partial that returns navbar controls.

This allows us to use Jade (better HTML) for writing client-side interface bits. They have to be placed on the server side for the jade engine to render them. 

Add the following to index.jade

```jade
extends ../layouts/main_layout

block main-content
	.navbar.navbar-default
		.navbar-header
			a.navbar-brand(href='/') BlogSite
			div(ng-include="'/partials/common/navbar-controls'")  ------

	div(ng-view)
```

The newly added line, sends a request to /partials/common/navbar-controls to the server app, which attempts to render the file /public/client/common/navbar-controls.jade.

Create and fill the details in /public/client/common/navbar-controls.jade

navbar-controls.jade

```jade
div
	a.btn.btn-primary About
```

### In Browser

<img src="_misc/in%20browser%20with%20navbar%20button.png"/>

### Need for a separate controller

"mvMainController" defined in "mvMainController.js" acts the controller for the content that replaces div(ng-view) in index.jade. The navbar controls and div(ng-view) do not share a common ancestor, because of which the navbar controls need another controller. 

navbar-controls.jade

```jade
div(ng-controller="mvNavBarController")
	a.btn.btn-primary About
```

Add a click handler to the "About" button

```jade
div(ng-controller="mvNavBarController")
	a.btn.btn-primary(ng-click="onAboutClick()") About
```

Create "mvNavBarController"

```jade
angular.module('app').controller('mvNavBarController', function($scope) {
	$scope.onAboutClick = function() {
		console.log('About clicked ...');
	}
});
```

### Project structure

<img src="_misc/mvNavBarController%20in%20project.png"/>

### Refactoring server code

<img src="_misc/server%20side%20code%20refactoring.png"/>

<i>config.js</i> contains configuration parameters.

```javascript
var path = require('path');
var rootPath = path.normalize(__dirname + "/../../");

module.exports = {
	DEV: {
		rootPath: rootPath,
		connectionString: 'mongodb://localhost/blogsite',
		port: process.env.PORT || 8099
	}
}
```

Also, notice that the /signin route refactored to routes.js contains logic for implementing the signin functionality. It is not appropriate to place logic in a routes file, so that code can be refactored to its own file (authenticate.js).

<img src="_misc/after%20refactoring%20authentication%20code.png"/>

### Contents of server-side source files

<i>authenticate.js</i>

```javascript
var passport = require('passport');

exports.authenticate = function(req, res, next) {
		/*
			specify passport.authenticate the strategy being used ('local' in this case)

			passport authenticate returns a function that needs to be called next
		*/
		var auth = passport.authenticate('local', function(err, user) {
			/*
				In case of an error, pass it on
			*/
			if(err) {
				return next(err);
			}

			/*
				if a user is not found, then the user parameter is given false by done(null, false)
					call in passport.use() method
			*/

			if(!user) {
				res.send({success: false});
			}

			/*
				if a user is found, then the user parameter is given the found user by done(null, user)
					call in passport.use() method,

				in which case, ask passport to log the user in by calling logIn() function on the request object.

				The logIn() function is added to the request object by passport.

				Calling req.logIn() is done for handling the login requests done via XHR
				if the login requests were handled by submitting a form, req.logIn() is called automatically
			*/

			req.logIn(user, function(err) {
				if(err) {
					return next(err);
				}

				/*
					if login was successful, send to the client a JSON object with success property as true indicating about successful login,
						and the user object in the user property
				*/
				res.send({success:true, user: user});
			});
		});

		/*
			call the auth function saved before
		*/
		auth(req, res, next);
}
```

<i>init.js</i>

```javascript
var express = require('express'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	passport = require('passport');

var app = express();

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
```

<i>mongoose.js</i>

```javascript
var mongoose = require('mongoose');

module.exports = function(config) {
	/*
		connect to blogsite database on the local mongoDB server
	*/
	mongoose.connect(config.connectionString);

	var db = mongoose.connection;

	db.on('error', console.error.bind(console, 'Failed to connect. Error occurred ...'));

	db.once('open', function() {
		console.log('Connected to blogsite database');
	});

	/*
		Create a schema for users

		Column names and Column types
	*/
	var userSchema = mongoose.Schema({
			username: String,
			firstName: String, 
			lastName: String,		
		});


	/*
		Create a User model out of userSchema

		Pass in the collection name and the schema

		Mongoose processes the collection name i.e. 
			it makes the first letter small and 
			pluralizes the collection name
		to represent the collection in the database
		
		so, the collection name "User" represents "users" in the "blogsite" database
	*/
	var User = mongoose.model('User', userSchema);

	var firstBlog;

	/*
		Get all the documents from "users" collection by using the find() method on the "User" model

		If there is no user collection, create default users
	*/
	User.find({}).exec(function(err, userCollection) {
		if(userCollection.length == 0) {
			/*
				MAKE SURE THAT THE ATTRIBUTE NAMES OF DOCUMENT PASSED TO create() MATCHES WITH ATTRIBUTE NAMES
				PASSED TO mongoose.Schema

				Any typos would mean missing data.

				For example, if the schema is defined with username as one of its attributes,
					then passing userName (notice N is caps here) to create() method results in the actual 
					userName attribute unfilled for that document
			*/
			User.create({username: 'blackberry', firstName: 'Rim', lastName: 'blackberry'});
			User.create({username: 'android', firstName: 'Alphabet', lastName: 'Google'});
			User.create({username: 'iphone', firstName: 'Swift', lastName: 'ObjectiveC'});
		}
	});	
}
```

<i>passport.js</i>

```javascript
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	mongoose = require('mongoose'),
	User = mongoose.model('User');

	/*
		passport implements authentication as strategies

		passport-local's strategy allows authentication by means of usernames and password that can be stored in our own database
	*/

module.exports = function() {
	/*
		Configure passport to use LocalStrategy.

		Pass in a function to LocalStrategy
	*/
	passport.use(new LocalStrategy(
			function(username, password, done) {
				/*
					Implement custom code here to verify if the username and password are valid

					Use the "User" model defined earlier to verify if the username and password are valid

					Once the findOne() function returns, the callback registered with exec() function is executed.

					If the user exists in the database it is passed to the callback to the second parameter, else a null is passed. 
				*/

				User.findOne({username:username}).exec(function(err, user) {
					if(user) {
						return done(null, user);
					} else {
						return done(null, false);
					}
				});
			}		
		));

	/*
		Let passport know how to serialize and deserialize user

		The serializeUser takes in a user and a done callback
	*/
	passport.serializeUser(function(user, done) {
		if(user) {
			/*
				if the user exists, call done by passing null and the user._id. The user._id passed here will be received in 
					passport.deserializeUser() method
			*/
			done(null, user._id);
		}
	});

	passport.deserializeUser(function(id, done) {
		/*
			Look up the User by id using findOne() method. The id passed here is the user._id sent from passport.serializeUser() function

			Register a callback by passing it to exec() function. The callback is executed after findOne() returns.

			Check in the callback if the user exists and call done
		*/
		User.findOne({_id:id}).exec(function(err, user) {
			if(user) {
				return done(null, user);
			} else {
				return done(null, false);
			}
		}) 
	});
}
```

<i>routes.js</i>

```javascript
var authentication = require('./authenticate');

module.exports = function(app) {
	app.post('/signin', authentication.authenticate);

	/*
		The angular app sends XHR requests to /partials/*, which are handled here.

		For example, a request to /partials/home/root implies that req.params[0] is home/root, which then 
			attempts to render ../../public/client/home/root.jade. Since the views are configured to be found from /server/views
			directory, ../../ refers to projects root directory, so the file ../../public/client/home/root.jade refers to
			BlogSite/public/client/home/root.jade, which is what would be rendered
	*/
	app.get('/partials/*', function(req, res) {
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
		res.render('index');
	});	
}
```

<i>server.js</i>

```javascript
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
```

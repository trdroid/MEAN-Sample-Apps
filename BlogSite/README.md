
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

### Install more dependencies 

> /BlogSite$ npm install body-parser stylus morgan --save

	npm WARN package.json blogsite@1.0.0 No repository field.
	morgan@1.6.1 node_modules/morgan
	├── on-headers@1.0.1
	├── basic-auth@1.0.3
	├── depd@1.0.1
	├── on-finished@2.3.0 (ee-first@1.1.1)
	└── debug@2.2.0 (ms@0.7.1)
	
	body-parser@1.15.0 node_modules/body-parser
	├── content-type@1.0.1
	├── bytes@2.2.0
	├── depd@1.1.0
	├── on-finished@2.3.0 (ee-first@1.1.1)
	├── qs@6.1.0
	├── debug@2.2.0 (ms@0.7.1)
	├── iconv-lite@0.4.13
	├── raw-body@2.1.5 (unpipe@1.0.0)
	├── http-errors@1.4.0 (inherits@2.0.1, statuses@1.2.1)
	└── type-is@1.6.11 (media-typer@0.3.0, mime-types@2.1.9)
	
	stylus@0.53.0 node_modules/stylus
	├── css-parse@1.7.0
	├── debug@2.2.0 (ms@0.7.1)
	├── sax@0.5.8
	├── source-map@0.1.43 (amdefine@1.0.0)
	├── mkdirp@0.5.1 (minimist@0.0.8)
	└── glob@3.2.11 (inherits@2.0.1, minimatch@0.3.0)


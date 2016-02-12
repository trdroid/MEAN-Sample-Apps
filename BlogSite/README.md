
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

Because bower is used to install client-side dependencies, either install it globally or as a development ONLY dependency, as it is not required in production. 

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

This creates bower.json file

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

### Install nodemon globally

Explore the project structure to find the client-side dependencies under public/vendor directory

<i>BlogSite/public/vendor</i>

<img src="_misc/installed%20client-side%20dependencies.png"/>

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


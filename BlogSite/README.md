
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



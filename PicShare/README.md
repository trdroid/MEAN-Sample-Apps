### Project Creation

> MEAN$ express PicShare

     create : PicShare
     create : PicShare/package.json
     create : PicShare/app.js
     create : PicShare/public
     create : PicShare/public/images
     create : PicShare/public/stylesheets
     create : PicShare/public/stylesheets/style.css
     create : PicShare/routes
     create : PicShare/routes/index.js
     create : PicShare/routes/users.js
     create : PicShare/views
     create : PicShare/views/index.jade
     create : PicShare/views/layout.jade
     create : PicShare/views/error.jade
     create : PicShare/bin
     create : PicShare/bin/www
  
     install dependencies:
       $ cd PicShare && npm install
  
     run the app:
       $ DEBUG=PicShare:* npm start
  
     create : PicShare/public/javascripts

> MEAN$ cd PicShare && npm install

     debug@2.2.0 node_modules/debug
     └── ms@0.7.1
     
     serve-favicon@2.3.0 node_modules/serve-favicon
     ├── fresh@0.3.0
     ├── parseurl@1.3.1
     ├── etag@1.7.0
     └── ms@0.7.1
     
     cookie-parser@1.3.5 node_modules/cookie-parser
     ├── cookie@0.1.3
     └── cookie-signature@1.0.6
     
     morgan@1.6.1 node_modules/morgan
     ├── basic-auth@1.0.3
     ├── on-headers@1.0.1
     ├── depd@1.0.1
     └── on-finished@2.3.0 (ee-first@1.1.1)
     
     body-parser@1.13.3 node_modules/body-parser
     ├── bytes@2.1.0
     ├── content-type@1.0.1
     ├── depd@1.0.1
     ├── qs@4.0.0
     ├── on-finished@2.3.0 (ee-first@1.1.1)
     ├── http-errors@1.3.1 (statuses@1.2.1, inherits@2.0.1)
     ├── iconv-lite@0.4.11
     ├── raw-body@2.1.5 (unpipe@1.0.0, bytes@2.2.0, iconv-lite@0.4.13)
     └── type-is@1.6.11 (media-typer@0.3.0, mime-types@2.1.10)
     
     express@4.13.4 node_modules/express
     ├── array-flatten@1.1.1
     ├── escape-html@1.0.3
     ├── utils-merge@1.0.0
     ├── methods@1.1.2
     ├── vary@1.0.1
     ├── cookie-signature@1.0.6
     ├── content-type@1.0.1
     ├── etag@1.7.0
     ├── parseurl@1.3.1
     ├── fresh@0.3.0
     ├── cookie@0.1.5
     ├── serve-static@1.10.2
     ├── range-parser@1.0.3
     ├── path-to-regexp@0.1.7
     ├── merge-descriptors@1.0.1
     ├── content-disposition@0.5.1
     ├── depd@1.1.0
     ├── qs@4.0.0
     ├── on-finished@2.3.0 (ee-first@1.1.1)
     ├── finalhandler@0.4.1 (unpipe@1.0.0)
     ├── proxy-addr@1.0.10 (forwarded@0.1.0, ipaddr.js@1.0.5)
     ├── send@0.13.1 (destroy@1.0.4, statuses@1.2.1, ms@0.7.1, mime@1.3.4, http-errors@1.3.1)
     ├── type-is@1.6.11 (media-typer@0.3.0, mime-types@2.1.10)
     └── accepts@1.2.13 (negotiator@0.5.3, mime-types@2.1.10)
     
     jade@1.11.0 node_modules/jade
     ├── character-parser@1.2.1
     ├── commander@2.6.0
     ├── void-elements@2.0.1
     ├── constantinople@3.0.2 (acorn@2.7.0)
     ├── jstransformer@0.0.2 (is-promise@2.1.0, promise@6.1.0)
     ├── with@4.0.3 (acorn@1.2.2, acorn-globals@1.0.9)
     ├── mkdirp@0.5.1 (minimist@0.0.8)
     ├── clean-css@3.4.9 (commander@2.8.1, source-map@0.4.4)
     ├── transformers@2.1.0 (promise@2.0.0, css@1.0.8, uglify-js@2.2.5)
     └── uglify-js@2.6.2 (async@0.2.10, uglify-to-browserify@1.0.2, source-map@0.5.3, yargs@3.10.0)

### Create a Group

Create a group that is assigned with administrative privileges, so that users who are meant to administer the app can be added to this group. 

<img src="_misc/Creating%20a%20group.png"/>

Click next without attaching any managed policies to the group.

<img src="_misc/Attach%20Policy%20Screen.png"/>

Create the group

<img src="_misc/Review%20Group.png"/>

The group is now created.

<img src="_misc/Group%20Created.png"/>

Click on the group, which displays the following

<img src="_misc/Click%20on%20the%20group.png"/>

View the "permission" tab

<img src="_misc/Permission%20tab%20of%20the%20Group.png"/>

Expand "Inline Policies"

<img src="_misc/Inline%20policy%20of%20the%20group.png"/>

Click on "Click Here"

<img src="_misc/after%20expanding%20inline%20policies.png"/>

Clicking on "select" opens up the Edit permissions screen

<img src="_misc/Edit%20Permissions%20screen%20of%20Policy%20Generator.png"/>

In this screen, grant all the services and the corresponding actions on the services that any of the app's Administrators is allowed to handle. 

Grant Access to the following services for the app's Administrator's group:

* AWS OpsWorks
* Amazon EC2
* Amazon RDS
* Amazon S3
* Amazon CloudFront
* Amazon Route53

<img src="_misc/Granting%20AWS%20OpsWorks%20Permission.png"/>

<img src="_misc/After%20adding%20the%20statement%20for%20AWS%20OpsWorks.png"/>

<img src="_misc/Selecting%20Amazon%20EC2%20Service.png"/>

<img src="_misc/After%20Adding%20Amazon%20EC2%20Service.png"/>

<img src="_misc/Adding%20Amazon%20RDS%20Service.png"/>

<img src="_misc/After%20Adding%20Amazon%20RDS%20Service.png"/>

<img src="_misc/Adding%20Amazon%20S3%20Service.png"/>

<img src="_misc/After%20Adding%20Amazon%20S3%20Service.png"/>

<img src="_misc/Adding%20Amazon%20CloudFront%20Service.png"/>

<img src="_misc/After%20Adding%20Amazon%20CloudFront%20Service.png"/>

<img src="_misc/Adding%20Amazon%20Route%2053%20Service.png"/>

<img src="_misc/After%20Adding%20Amazon%20Route%2053%20Service.png"/>

Hit Next Step

<img src="_misc/Policy%20Name%20and%20Policy%20Document.png"/>

<img src="_misc/After%20creating%20an%20inline%20policy%20for%20a%20group.png"/>

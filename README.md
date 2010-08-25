Tapas Example
=============

This example app show's all you'll need to build TAPAS (Team Application Platform And Services) apps.  

Compile-Time Dependencies
-------------------------

* ndistro
* expresso

### ndistro

Dependencies are all managed from [nDistro](http://github.com/visionmedia/ndistro) so that all files are copied and executed in a relative directory, making the application self contained without requiring the need to add modules to the system.  This is desirable as we may have many applications requiring different versions on the same server.

A copy of ndistro will need to be installed, instructions are on the project page.

### expresso

[Expresso](http://github.com/visionmedia/expresso) is a TDD framework for node.  This will need to be installed, along with it's associated dependencies such as jscoverage.

Run-Time Dependencies
---------------------

The build process will produce a tar.gz file which should be viewed as a completely self-contained application.  All that'll be required is to drop the tar.gz file onto a server, blow it up and run "./bin/node wrapper.js"


Build
-----

Dependency:- [Apache Ant](http://ant.apache.org/)  

Currently this build script does the following:

* deletes a directory called 'build'
* executes nDistro
* creates a build directory
* copies all relevant files into the build directory
* within the build directory, instrument the source code
* within the build directory, execute tests with coverage

This build script should also start the application, run tests against it and then shut the application down. It should generate appropriate reports and be executed in a continuous integration environment.

Logging
-------

Dependency:- [log4js](http://github.com/csausdev/log4js-node)

Currently, logging is achieved through log4js, a log4j like syntax that's simple to use to write to file.  The example shows:

* the creation of a logging directory 
* setting up a file appender
* getting the logger object
* writing a simple message to the file appender

API Routing
-----------

Dependency:- [ExpressJS](http://expressjs.com)

API routing is done through ExpressJS, a Sinatra like web server.  The example shows:

* accepting a GET request on '/' and returning the body 'OK'

Testing
-------

Dependency:- [Expresso](http://github.com/visionmedia/expresso)

The example has tests in the test folder and uses the server object to hit the API. It uses the instrumented code to gather code coverage and prints this out in the build.

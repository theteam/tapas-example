Tapas Example
=============

This example app show's all you'll need to build TAPAS (Team Application Platform And Services) apps.  

Dependencies
------------

Dependencies are all managed from nDistro (http://github.com/visionmedia/ndistro) so that all files are copied and executed in a relative directory, making the application self contained without requiring the need to add modules to the system.  This is desirable as we may have many applications requiring different versions on the same server.

A copy of ndistro will need to be installed, instructions are on the project page.

Build
-----

This example uses Apache Ant (http://ant.apache.org/) as a build script.  Currently this build script does the following:

* creates a build directory
* copies all relevant files into the build directory
* executes nDistro

This build script should also start the application, run tests against it and then shut the application down. It should generate appropriate reports and be executed in a continuous integration environment.

Logging - http://github.com/csausdev/log4js-node
-------

Currently, logging is achieved through log4js, a log4j like syntax that's simple to use to write to file.  The example shows:

* the creation of a logging directory 
* setting up a file appender
* getting the logger object
* writing a simple message to the file appender

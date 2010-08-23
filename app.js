
/****************************************************
* Setup some logging using log4js
*****************************************************/
// create log directory if required
var fs = require('fs');
fs.mkdir('log', 0700);
// bring in module, have to reference directly as not called 'index.js'
var log4js = require('./modules/log4js-node/lib/log4js');
// create logging appenders
// log4js.addAppender(log4js.consoleAppender()); // will write to console
log4js.addAppender(log4js.fileAppender('log/app.log'), 'tapas-example');
// get specified log and set minimum logging level  
var logger = log4js.getLogger('tapas-example');
logger.setLevel('INFO');
// giddy up
logger.info('ready...');


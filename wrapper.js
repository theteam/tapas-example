
/****************************************************
* Setup some logging using log4js
*****************************************************/

// create log directory if required
var fs = require('fs');
fs.mkdir('log', 0700);

// bring in module, have to reference directly as not called 'index.js'
var log4js = require('./modules/log4js-node/lib/log4js');

// create logging appenders
log4js.addAppender(log4js.consoleAppender(), 'tapas-example-wrapper'); // will write to console
log4js.addAppender(log4js.fileAppender('log/app.log'), 'tapas-example-wrapper');
// get specified log and set minimum logging level  
var logger = log4js.getLogger('tapas-example-wrapper');
logger.setLevel('INFO');

/****************************************************
* Setup server
*****************************************************/

var app = require('./src/app');
var tapas = app.tapas;

tapas.server.listen(tapas.port);
logger.info('Tapas being served on port ' + tapas.port);
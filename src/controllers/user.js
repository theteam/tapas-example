/****************************************************
* Setup some logging using log4js
*****************************************************/
// bring in module, have to reference directly as not called 'index.js'
var log4js = module.parent.exports.tapas.log; //require('../../modules/log4js-node/lib/log4js');
// create logging appenders
log4js.addAppender(log4js.fileAppender('log/app.log'), 'controller.user');
// get specified log and set minimum logging level  
var logger = log4js.getLogger('controller.user');
logger.setLevel('INFO');
// giddy up
logger.info('user controller ready...');

var User = require('../models/user');

var tapas = module.parent.exports.tapas;
tapas.controller = tapas.controller || {};
tapas.controller.user = tapas.controller.user || {};

tapas.controller.user.index = function(req, res){
	res.render('user_new.ejs');
};

tapas.controller.user.create = function(req, res){
	var user = new User();
	user.first = req.body.first;
	user.last = req.body.last;
	user.age = req.body.age;
	user.save(function(){
		logger.info('user ' + user.full_name + ' saved');
		res.redirect('/user/' + user.first);
	});
	//TODO: error handling
};

tapas.controller.user.get = function(req, res){
	logger.info('looking up user ' + req.params.id);
	
	User.find({first:req.params.id}).first(function(data){
		logger.info('suit up: ' + data.first);
		res.render('user_show.ejs', {
			locals:{user:data}
		});
	});	
	//TODO: error handling
};

tapas.controller.user.list = function(req, res){
	logger.info('listing all users...');
	User.find({}).all(function(data){
		logger.info('found ' + data.length + ' users in the system');
		res.render('list_users.ejs', {
			locals:{users:data}
		});
	});
	//TODO: error handling
};

module.exports = tapas.controller.user;

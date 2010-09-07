var http = require('http');
var server = require('app').tapas.server;

module.exports = {
    'test assert.response()': function(assert, beforeExit){

			//         assert.response(server, {
			//             url: '/',
			//             method: 'GET'
			//         },{
			// body: 'OK',
			//             status: 200       
			//         });

        assert.response(server, {
            url: '/doesntexist',
            method: 'GET'
        },{
            status: 404       
        });
	}
};

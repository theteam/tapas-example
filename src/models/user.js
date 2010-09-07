var mongoose = require('../../modules/mongoose/mongoose').Mongoose;
var db = mongoose.connect('mongodb://localhost/tapasexample');

mongoose.model('User', {

    properties: ['first', 'surname', 'age', 'updated_at'],

    cast: {
      age: Number,
      'nested.path': String
    },

    indexes: ['first'],

    getters: {
        full_name: function(){ 
            return this.first + ' ' + this.surname; 
        }
    },

    methods: {
        save: function(fn){
            this.updated_at = new Date();
            this.__super__(fn);
        }
    },

    static: {
        findOldPeople: function(){
            return this.find({age: { '$gt': 70 }});
        }
    }

});

module.exports = db.model('User');

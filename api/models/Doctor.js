/**
 * Doctor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require("bcrypt");
module.exports = {

  attributes: {
	    name : {
	        type : 'string',
	        required : true,
	        size: 250
	    },
	    email : {
	        type : 'email',
	        required : true,
	        unique : true
	    },
	    password : {
	        type : 'string',
	        required : true
	    },
	    gender : {
	        type : 'string'
	    },
	    about : {
	        type : 'text',
	        defaultsTo: 'Write about yourself !!'
	    }, 
	  	toJSON : function(){
	  		var out = this.toObject();
	        delete out.password;
	  		return out;
	  	},
	  	practices: {
	      collection: 'practice',
	      via: 'doctors',
	      dominant: true
    	}
	  },
	    
	    
	  // Lifecycle Callbacks
	  beforeCreate : function (user, callback) {
	  	bcrypt.genSalt(10, function(err, salt){
	  		console.log("encrypting")
	  		bcrypt.hash(user.password, salt, function(err, hash){
	  			if(err){
	  				callback(err);
	  			}
	  			else{
	  				user.password = hash;
	                callback();
	  			}
	  		});
	  	});
	  },
	  beforeUpdate : function (user, callback) {
	    if(!user.password) callback();
	    else{
	      bcrypt.genSalt(10, function(err, salt){
	        console.log("Update Encrypting")
	        bcrypt.hash(user.password, salt, function(err, hash){
	          if(err){
	            callback(err);
	          }
	          else{
	            user.password = hash;
	            callback();
	          }
	        });
	      });
	    }
	  },
};


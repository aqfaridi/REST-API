/**
 * Practice.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	    name : {
	        type : 'string',
	        required : true,
	        unique : true,
	        size: 500
	    },
	    address : {
	        type : 'text',
	        required : true
	    },
	    city : {
	        type : 'string',
	        required : true
	    },
	    state: {
	        type : 'string',
	        required: true
	    },
	    country: {
	        type : 'string',
	        required: true
	    },
	    doctors: {
	      collection: 'doctor',
	      via: 'practices'
	    }
	  },
};


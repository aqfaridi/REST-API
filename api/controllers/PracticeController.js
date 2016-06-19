/**
 * PracticeController
 *
 * @description :: Server-side logic for managing practices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	// ALL action
    all: function(req, res) {
        var id = req.param('page');
        var sk = (id-1)*10;
        Practice.find({limit:10,skip:sk})
            .exec(function(err, practice) {
                if (err) {
                    return res.json({
                        error: err
                    });
                }
                if (!practice) {
                    return res.notFound('Could not find Practices, sorry.');
                  }
                
                return res.json(practice);    
            });
    },

	// CREATE action  
    create: function(req, res) {

        var params = req.params.all();
        console.log(params);
        Practice.create(params, function(err, user) {

            if (err) return res.json({error : err});
                
            res.status(201);

            res.json(user);

        });
    },
    
    // FIND action
    find: function(req, res) {
        var id = req.param('id');
        Practice.findOne({id:id}).populate('doctors')
            .exec(function(err, user) {
                if (err) {
                    return res.json({
                        error: err
                    });
                }
                if (!user) {
                    return res.notFound('Could not find Practice, sorry.');
                  }
                
                sails.log('Found "%s"', user.name);
                return res.json(user);    
            });
    },
    
    // DESTROY action
    destroy: function(req, res) {
        var id = req.param('id');
        Practice.destroy({id:id}).exec(function (err){
            if (err) {
            return res.negotiate(err);
            }
            sails.log('Practice now been deleted, if there were any.');
            return res.ok();
        });
    },

    // UPDATE action
    update: function(req, res) {
    	var id = req.param('id');

    	Practice.findOne({id:id})
            .exec(function(err, user) {

            	 if (err) {
                    return res.json({
                        error: err
                    });
                }
                if (!user) {
                    return res.notFound('Could not find Practice, sorry.');
                  }

               // Queue up a record to be inserted into the join table
        	   user.doctors.add(req.param('doctors'));
			   // Save the user, creating the new associations in the join table
			   user.save(function(err) {});


                               
                //sails.log('Found "%s"', user.name);
                return res.json(user);    
            });

        // var params = req.params.all();
        // console.log(params);
        // Practice.update({id:params.id},params).exec(function afterwards(err, updated){

        //   if (err) {
        //     return res.serverError(err);
        //   }

        //   console.log('Updated Practice to have name ' + updated[0].name);
        //   return res.json(params); 
        //});
    }
};


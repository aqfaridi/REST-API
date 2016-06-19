/**
 * DoctorController
 *
 * @description :: Server-side logic for managing doctors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	// ALL action
    all: function(req, res) {
        var id = req.param('page');
        var sk = (id-1)*10;
        Doctor.find({limit:10,skip:sk})
            .exec(function(err, user) {
                if (err) {
                    return res.json({
                        error: err
                    });
                }
                if (!user) {
                    return res.notFound('Could not find Doctors, sorry.');
                  }
                
                //sails.log('Found "%s"', user.name);
                return res.json(user);    
            });
    },

	// CREATE action  
    create: function(req, res) {

        var params = req.params.all();
        console.log(params);
        Doctor.create(params, function(err, user) {

            if (err) return res.json({error : err});
                
            res.status(201);

            res.json(user);

        });
    },
    
    // FIND action
    find: function(req, res) {
        var id = req.param('id');
        Doctor.findOne({id:id}).populate('practices')
            .exec(function(err, user) {
                if (err) {
                    return res.json({
                        error: err
                    });
                }
                if (!user) {
                    return res.notFound('Could not find Doctor, sorry.');
                  }
                
                sails.log('Found "%s"', user.name);
                return res.json(user);    
            });
    },
    
    // DESTROY action
    destroy: function(req, res) {
        var id = req.param('id');
        Doctor.destroy({id:id}).exec(function (err){
            if (err) {
            return res.negotiate(err);
            }
            sails.log('Doctor now been deleted, if there were any.');
            return res.ok();
        });
    },

    // UPDATE action
    update: function(req, res) {
        var params = req.params.all();
        Doctor.update({id:params.id},params).exec(function afterwards(err, updated){

          if (err) {
            // handle error here- e.g. `res.serverError(err);`
            return;
          }

          console.log('Updated Doctor to have name ' + updated[0].name);
          return res.json(params); 
        });
    }
};


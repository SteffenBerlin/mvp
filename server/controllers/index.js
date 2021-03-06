var models = require('../models');

module.exports = {

  users: {
    get: function (req, res) {
      models.users.get( req.query.username , function( results ){
        res.send( results );
      });
    },
    post: function( req, res ) {
      models.users.post( req.body );
      res.send( );
    },
    update: function( req, res ) {
      models.users.update( req.body.username, req.body );
      res.send( );
    }
  },

  commitments: {
    get: function( req, res ) {
      models.commitments.get( req.query.username, function( results ){
        res.send( results );
      });
    },
    post: function( req, res ) {
      console.log(req.body);
      models.commitments.post( req.body.username.username, req.body.commitment );
      res.send( );
    }
  }
  
};
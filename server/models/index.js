var db = require('../db');
var User = db.User;
var Commitment = db.Commitment;

module.exports = {
  users: {
    get: function ( username, callback ) {
      User.findAll({
        where: {username: username}
      })
      .then(function(userdata){
        callback(JSON.stringify(userdata));
      }, function(err){
        console.log('This is the user get error: ' + err);
      });
    },
    post: function ( userdata ) {
      var newUser = User.build( userdata );
      newUser.save().then(function(){
        console.log('Insert ' + userdata.username + 'into users');
      },
      function(err){
        console.log('This is the Users POST error: ' + err);
      });
    },
    update: function ( username, scores ) {
      User.update(scores, {where: {username: username}})
      .then(function(){
        console.log('successfully updated the user ' + username);
      }, function(err){
        console.log('This is an error in users update' + err);
      });
    }
  },

  commitments: {
    get: function ( username, callback ){
      Commitment.findAll({where: {username: username}
    })
    .then(function(commitments){
      callback(JSON.stringify(commitments));
    }, function(err) {
      console.log('This is the commitments get error: ' + err);
      });
    },

    post: function ( username, commitment ) {
      User.findAll({where: {username: username}
      }).then(function(user){
        var params = commitment;
        params['user_id'] = user.id;
        var newCommitment = Commitment.build( params );
        newCommitment.save().then(function(){
          console.log('Saved new commitment successfully');
        }, function(err){
          console.log('this is the save commitment error: ' + err);
        })
      }, function(err){
        console.log('This is the commitment post error: ' + err);
      });
    }
  }
}
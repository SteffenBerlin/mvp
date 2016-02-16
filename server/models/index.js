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
        console.log(err);
      })
    },
    

  }
}
var Sequelize = require ('sequelize');
var db = new Sequelize('commitments', 'root', '', 
   {define: {underscored: true}});

var User = db.define ('users', {
  username: { type: Sequelize.STRING, unique: true },
  necDayScore: Sequelize.INTEGER,
  curDayScore: Sequelize.INTEGER,
  todaySuccess: Sequelize.BOOLEAN,

  necWeekdaySuc: Sequelize.INTEGER,
  curWeekdaySuc: Sequelize.INTEGER,
  thisWeekSucess: Sequelize.BOOLEAN,
  weekSuccesses: Sequelize.INTEGER,

  dateLastAssessed: Sequelize.DATE
});

var Commitment = db.define ('commitments', {
  name: { type: Sequelize.STRING, unique: true },
  description: Sequelize.TEXT,
  minWeekMust: Sequelize.INTEGER,
  points: Sequelize.INTEGER,
});

Commitment.belongsTo( User );
User.hasMany( Commitment );

User.sync();        //creates missing tables automatically
Commitment.sync();

exports.User = User;
exports.Commitment = Commitment;

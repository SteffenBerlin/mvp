var express = require('express');
var db = require('./db');

//Middleware
var morgan = require('morgan');
var parser = require('body-parser');

//Router
var router = require('./routes');

//Express
var app = express();
module.exports.app = app;

//Set port
app.set('port', 3000);

//Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

//Set up the routes
app.use('/app', router);
// localhost:3000/app/dailyCommitments
// localhost:3000/app/create

//Serve the client files
app.use(express.static(__dirname + '/../client/client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

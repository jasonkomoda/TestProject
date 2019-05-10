
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./api/models/userModel'), //created model loading here
  bodyParser = require('body-parser'),
  config = require('./config'),
  logger = require('morgan');

if (config.isDEV) {
  app.use(logger("combined")); //middleware to log all the incoming requests
}

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Videoprojectdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var userRoutes = require('./api/routes/userRoutes');
app.use('/users', userRoutes);

var loginRoutes = require('./api/routes/loginRoutes');
app.use('/login', loginRoutes);

app.listen(port);

console.log('Video project API server started on: ' + port);
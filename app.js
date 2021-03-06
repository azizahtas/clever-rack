//taskkill /F /IM node.exe Run this as admin To kill all node Processes
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require("./config");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var storeRouter = require('./routes/storeController');
var shelfRouter = require('./routes/shelfController');
var itemRouter = require('./routes/itemsController');

var Port = process.env.PORT || config.port;


var app = express();

var dburi = 'mongodb://'+config.Online.db_host+':'+config.Online.db_port+'/'+config.Online.db;
mongoose.connect(dburi);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(function(req, res, next) {
  //res.header("Access-Control-Allow-Origin", "http://localhost:"+config.client);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,HEAD");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/stores', storeRouter);
app.use('/shelves', shelfRouter);
app.use('/items', itemRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

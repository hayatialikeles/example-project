var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var screetKey = require('./config')


var bodyParser = require('body-parser');

var mongoose =require('mongoose');

const  mongoAtlasUri ="mongodb+srv://hayati:t0BVw6yImkWyDk6J@realmcluster.5evrz.mongodb.net/userList?retryWrites=true&w=majority";
try {
  // Connect to the MongoDB cluster
   mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => console.log(" Mongoose is connected",err)
  );

} catch (e) {
  console.log("could not connect");
}

var app = express();

app.set("scretKey",screetKey.api_scret_key);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);



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

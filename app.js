var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db=require('./Models');

var indexRouter = require('./routes/index');
var empRouter = require('./routes/emp');
var deptRouter =require('./routes/dept');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


db.sequelize.sync({});

require('./routes/index')(app);

app.use('/', indexRouter);
app.use('/emp',empRouter);
app.use('/dept',deptRouter);

module.exports = app;

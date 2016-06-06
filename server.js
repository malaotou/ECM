var express=require('express');
var app =express();
var mongoose=require('mongoose');
var passport=require('passport');
LocalStrtegy=require('passport-local').Strategy;

var env=process.env.NODE_ENV=process.env.NODE_ENV||'development'


var config= require('./server/config/config')[env];

require('./server/config/express')(app,config);
require('./server/config/mongoose')(config)
require('./server/config/passport')();
require('./server/config/routes')(app);

app.listen(config.port);
console.log('Server start on port '+config.port)
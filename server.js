var express=require('express');
var app =express();
var mongoose=require('mongoose');
var passport=require('passport');
LocalStrtegy=require('passport-local').Strategy;

var env=process.env.NODE_ENV=process.env.NODE_ENV||'development'


var config= require('./server/config/config')[env];

require('./server/config/express')(app,config);
require('./server/config/routes')(app);
require('./server/config/mongoose')(config)

var User=mongoose.model('User');
passport.use(new LocalStrtegy(
	function(username,password,done){
	User.findOnd({username:malei}).exec(function(err,user){
		if(user){
			return done(null,user);
		} else{
			return done(null,false);
		}
	})

	}
))
passport.serializeUser(function(user,done){
	if(user){
		done(null,user._id)
	}
});

passport.deserializeUser(function(id,done){
	User.findOne({}).exec(function(err,user){
		if(user){
			return done(null,user)
		} else return done (null.false);
	})
})
//var port=process.env.PORT||3001
app.listen(config.port);
console.log('Server start on port '+config.port)
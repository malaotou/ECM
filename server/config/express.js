var express=require('express');
stylus=require('stylus');
var path=require('path');
var bodyParser = require('body-parser');

var passport=require('passport');
var cookieParser = require('cookie-parser')
var session = require('express-session')
module.exports=function(app,config){

	function compile(str,path){
		return stylus(str).set('filename',null);
	}

	app.set('views', path.join(config.rootPath, 'server/views'));
	app.set('view engine','jade');
	app.use(stylus.middleware({
		src:config.rootPath+'/public',
		compile:compile
	}));
	//app.use(cookieParser());
	//app.set('trust proxy', 1) // trust first proxy
	app.use(session({
	  secret: 'keyboard cat',
	  resave: false,
	  saveUninitialized: true,
	  cookie: { secure: true }
	}))

	//解决 Req Body Null 问题
	app.use(bodyParser.json());         
	app.use(bodyParser.urlencoded({ extended: true })); 
	//End
	app.use (passport.initialize());
	app.use(passport.session());
	app.use(express.static(config.rootPath+'/public'));
	app.use(require('body-parser').urlencoded({extended: true}))

}

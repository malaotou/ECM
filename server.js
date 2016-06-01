var express=require('express');
var bodyParser = require('body-parser');
var app =express();
var stylus=require('stylus');
var logger =require('express-logger')


function compile(str,path){
	return stylus(str).set('filename',null);
}



app.set('views', __dirname);
app.set('view engine','jade');
app.use(stylus.middleware({
	src:__dirname+'/public',
	compile:compile
}));
app.use(express.static(__dirname+'/public'));
//app.use(logger({path: "/path/to/logfile.txt"}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.locals.viewdir=__dirname+'/public/views'

app.get('*',function(req,res){
	
	res.render('public/index');
})
var port=process.env.PORT||3000
app.listen(port);
console.log('Server start on port '+port)
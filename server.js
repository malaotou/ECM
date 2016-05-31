var express=require('express');
var app =express();

app.set('view engine','jade');

app.get('*',function(req,res){
	res.send('this is the demo site');
})
var port=3000||process.env.PORT
app.listen(port);
var express=require('express');
var app =express();

app.set('view engine','jade');

app.get('*',function(req,res){
	res.send('this  ');
})
var port=process.env.PORT||3000
app.listen(port);
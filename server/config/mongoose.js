var mongoose =require('mongoose')
module.exports=function(config){
	mongoose.connect(config.db);
	var db=mongoose.connection;
	db.once('open',function(callback){
		console.log('db Open')
	});
	db.on('error',console.error.bind(console,'connect error'));

	var userSchema=mongoose.Schema({
	firstName:String,
	lastName:String,
	userName:String
	})
	var User=mongoose.model('User',userSchema);
	User.find({}).exec(function(err,collection) {
	if(collection.length==0){
		User.create({
		firstName:'Ma',
		lastName:'Lei',
		userName:'malei'
		});
		User.create({
		firstName:'Ma2',
		lastName:'Lei',
		userName:'malei2'
		});
	}
	})
}
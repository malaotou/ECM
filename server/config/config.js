var path=require('path');
var rootPath=path.normalize(__dirname+'/../../');

module.exports={
	development:{
		db:'mongodb://mamou:mamou@ds021343.mlab.com:21343/mamouecm',
		rootPath:rootPath,
		port:process.env.PORT||3000
	},
	production:{
		db:'mongodb://mamou:mamou@ds021343.mlab.com:21343/mamouecm',
		rootPath:rootPath,
		port:process.env.PORT||80
	}

}
var http=require('http');
var url=require('url');
var dns=require('dns');
var fs=require('fs');
var querystring=require('querystring');
http.createServer(function(req,res){
	res.writeHead('200',{'Content-type':'text/html'});
	var readPath = __dirname+'/module/'+
	var indexPage = fs.readFileSync();
	res.end(indexPage);
}).listen(4000);
console.log('server is listening port 4000');

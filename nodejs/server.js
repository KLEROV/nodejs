//var http = require("http");
//http.createServer(function(request, response) {
//	response.writeHead(200, {
//		"Content-Type": "text/plain"
//	});
//	response.write("test nodjs");
//	response.end();
//}).listen(8899);
//console.log("nodejs start listen 8899 port!");


//var html='<meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />';
//const http = require('http');
//const hostname = '127.0.0.1';
//const fs=require("fs");
//console.log(1)
//var data=fs.readFileSync("p.html");//引入文件内容
//const port = 3000;
//console.log(data);
//console.log(2);
//const server = http.createServer((req, res) => {
//res.statusCode = 200;//状态值,200表示OK
//res.setHeader('Content-Type', 'text/html;charset=utf8');//内容类型
//res.end(data);//发送响应数据
//});
//console.log(3);
//server.listen(port, hostname, () => {
//console.log(`服务器运行在 http://${hostname}:${port}/`);//终端显示内容
//});

//var http = require("http");
//var url = require("url");
//var util=require("util");
//var fs=require("fs");
//function start() {
//	function onRequest(request, response) {
//		var pathname = url.parse(request.url).pathname;
////		console.log(pathname+" "+request+" "+url.parse(request.url));
////		console.log("Request for " + pathname + " received.");
//		fs.readFile("icon2.html",function(err,data){
//			if(err){
//				return console.log(err);
//			}	
//			
//			response.writeHead(200, {
//				"Content-Type": "text/html;charset=utf8"
//			});
////			response.write("测试开始"+" "+util.inspect(request)+" "+util.inspect(url));
//			response.write(data);
//			response.end();
//		})
//	}
//	http.createServer(onRequest).listen(3000,function(){
//		console.log("Server has started.");
//	});	
//}
//exports.start = start;
//start();


//var http = require('http');
//var server = http.createServer(function(req,res) {
//　　res.writeHead(200, {'Content-Type':"text/plain;charset=utf8"});
//console.log(res);
//});
//process.on('uncaughtException', function(e) {
//　　console.log(e);
//});
//server.listen(3000,()=>{
//	console.log("执行");
//});

var http=require('http');
var url=require('url');
function httpRequest(route){

	http.createServer(function(req,res){
//		var pathName=req.url;//  /favicon.ico
//		var pathName=req.url.pathname;//  /favicon.ico
//		var pathName=url.parse(req.url);//  /favicon.ico
		var pathName=url.parse(req.url).pathname;//  /favicon.ico
		route(pathName);
		res.writeHead('200',{'content-Type':'text/plain,charset=utf8'});
		res.write('hello world');
		res.end();
	}).listen(8080,function(){//'127.0.0.1'
		console.log('服务开始');
	});
	process.on('caughtException',function(e){//获取异常
		console.log(e,123);
	})
	process.on('uncaughtException',function(e){
		console.log(e,456);
	})
	
	function excute(someFunction,value){
		someFunction(value);
	}
	function value1(){
		return 'hello';
	}
	function value2(){
		return 'world';
	}
	excute(function(word){console.log(word)},function(){return 'hello'}()+" "+function(){return 'world'}());
	excute(function(word){console.log(word)},'this is a question');
	
}
function upload(){
		console.log('upload');
	}
exports.httpRequest=httpRequest;
exports.upload=upload;
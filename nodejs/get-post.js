//获取get请求内容


//var http = require("http");
//var url = require("url");
//var util = require("util");
////util.inspect();将任意对象转换为字符串
//http.createServer(function(request, reponse) {
//	reponse.writeHead(200, {
//		"Content-Type": "text/plain;charset=utf8"
//		});
//	console.log(request);
////	reponse.write(util.inspect(url.parse(request.url, true)));
////	reponse.end();
////	reponse.end(util.inspect(url.parse(request.url, true)));
//	reponse.end(util.inspect(url.parse(request.url)));
//	
//}).listen(3000,function(){
//	console.log("终端显示:"+url+3000)
//});


//获取url的参数
//样板:http://loaclhost:3000/user?name=百度&url=www.baidu.com

//var http=require("http");
//var url=require("url");
//var util=require("util");
//http.createServer(function(request,reponse){
//	reponse.writeHead(200,{"Content-Type":"text/plain;charset=utf8"});
//	var params=url.parse(request.url,true).query;
//	reponse.write("网站 id:"+params.id);
//	reponse.write("\n");
//	reponse.write("网站名:"+params.name);
//	reponse.write("\n");
//	reponse.write("网站 URL:"+params.url);
//	reponse.end();
//}).listen(3000,function(){
//	console.log("终端显示");
//})


//获取post请求


var http=require("http");
var querystring=require("querystring");
var util=require("util");
var html= '<!doctype html><html><head><meta charset="utf-8"><title>请求测试</title></head>' +
  '<body>' +
  '<p>这是一段测试数据,若显示则请求正常,不显示然后就.......</p>'+
  '<form method="post">' +
  '网站名称	<input name="name"><br>' +
  '网站链接	<input name="url"><br>' +
  '网站的ID <input name="id"><br>' +
  '网站性别	<input name="sex"><br>' +
  '网站地址	<input name="address"><br>' +
  '网站电话	<input name="tel"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
http.createServer(function(request,reponse){
	var post="";
	request.on("data",function(chunk){
		post+=chunk;
	})
	request.on("end",function(){
		reponse.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
		post=querystring.parse(post);
		reponse.write(html);
		reponse.write("\n");
		reponse.write(util.inspect(post));
		reponse.end();
	})
}).listen(3000,function(){
	console.log("请求完成");
})

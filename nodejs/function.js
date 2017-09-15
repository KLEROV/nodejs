//var http=require('http');
//http.createServer(function(request,response){
//response.writeHead(200,{'Content-Type':'text/plain'});
//response.write("hello world");
//response.end();
//}).listen(3000);
var http=require('http');
var onResquest=function(request,response){
	response.writeHead(200,{'Content-Type':'text/html'});
	response.write("<p style='font-size:20px;color:red;font-weight:bold;'>haha,hello world</p>");
	response.end();
}
http.createServer(onResquest).listen(3000);

//1.读取流中数据
//var fs=require('fs');
//var readerStream=fs.createReadStream('p.html');
//readerStream.setEncoding('utf8');
//readerStream.on('data',function(chunk){
//data+=chunk;
//})
//var data='';
//readerStream.on('data',function(chunk){
//data+=chunk;
//})
//readerStream.on('end',function(){
//console.log(data);
//})
//readerStream.on("error",function(err){
//console.log(err.stack);
//})
//console.log("程序执行完毕");


//2.把数据写入流中
var fs=require("fs");
var data='export.world=function(){console.log("hello wrorld"}';
var writeStream=fs.createWriteStream("hello.js");
writeStream.write(data,"utf8");
writeStream.end();
writeStream.on("finish",function(){
	console.log("写入完成");
})
writeStream.on("error",function(err){
	console.log(err.stack);
})
console.log("程序执行完毕");


//3.管道流(读取→写入)
//var fs=require("fs");
//var readerStream=fs.createReadStream("p.html");
//var writeStream=fs.createWriteStream("out.html");
//readerStream.pipe(writeStream);
//console.log("执行完成");


//链式流

//压缩文件
//var fs=require('fs');
//var zlib=require('zlib');
//fs.createReadStream("p.html").pipe(zlib.createGzip()).pipe(fs.createWriteStream("p.html.zip"));
//console.log("压缩完成");
//解压文件
//fs.createReadStream("p.html.zip").pipe(zlib.createGunzip()).pipe(fs.createWriteStream("p1.html"));
//console.log("解压完成");


//var d = require('domain').create();//创建一个新的域对象
//d.on('error', (er) => {
//	console.log('error,but oh well', er.message);
//});
//d.run(() => {//在域的上下文运行提供的函数,隐式的绑定了所有的事件分发器,计时器和底层请求
//	var http = require('http').createServer((req, res) => {
//		handleRequest("haha", "wulala");//不存在时报错,error,but oh well handleRequest1 is not defined
//		res.writeHead(200, {
//			'Content-Type': "text/plain;charset=utf8"
//		});
//		res.write("haha"+"\n"+"wulala");
//		res.end();
//	}).listen(3000, () => {
//		console.log(123);
//	})
//})
//function handleRequest(req, res) {
//		console.log(req);
//		console.log(res);
//}

//var cluster = require("cluster");
//var port = 3000;
//if(cluster.isMaster) {
//	cluster.fork();
//	cluster.fork();
//	cluster.fork();
////	cluster.on('disconnect', (worker) => {
////		console.error('disconnect!')
////		cluster.fork();
////	})
//} else {
//	var domain = require("domain");
//	var server = require('http').createServer((req, res) => {
//		var d = domain.create();
//		d.on('error', (er) => {//执行存在错误时执行
//			console.error(`error:${er.stack}`);
//			try {
//				var killtimer = setTimeout(() => {
//					process.exit(1);
//					console.log(12);
//				}, 3000);
//				killtimer.unref();
//				server.close()
//				cluster.worker.disconnect();
//				res.statusCode = 500;
//				res.setHeader('content-type', 'text/plain');
//				res.end('Oops,there was a problem!\n')
//			} catch(er2) {
//				console.error(`Error sending 500!`, er2.stack);
//			}
//		})
//		d.add(req);
//		d.add(res);
//		console.log(d);
//		d.run(() => {
//			console.log(123);
//			handleRequest(req, res);//当其不存在时报错
//		})
//	})
//	server.listen(port);
//}
//cluster.on('disconnect', (worker) => {
//	console.error('disconnect!')
//	cluster.fork();
//})
//function handleRequest(req, res) {
//	switch(req.url) {
//		case '/error':
//			setTimeout(() => {
//				flerb.bark();
//			})
//			break;
//		default:
//			res.end('ok');
//	}
//}


//var serverDomain=require("domain").create();
//var http=require("http");
//serverDomain.run(()=>{
//	
//	http.createServer((req,res)=>{
//		var reqd=require('domain').create();
//		reqd.add(req);//添加到域里的计时器和事件分发器
//		reqd.add(req);
//console.error(err);
//		reqd.on('error',(er)=>{
//			
//			console.error('Error:',er,req.url);
//			try{
//				res.writeHead(500);
//				res.end('Error occurred,sorry');
//			}catch(er){
//				console.error('Error sending 500',er,req.url);
//			}
//		})
//	}).listen(3000);
//})

//var d=require('domain').create();
//var fs=require("fs");
//var buf=Buffer.alloc(1024,0);
//d.on('error',(er)=>{//运行过程中存在错误执行
//	console.error('Caught error',er);
//})
//d.run(()=>{
//	process.nextTick(()=>{
//		setTimeout(()=>{
//			fs.open('P.html','r+',(er,fd)=>{
//				if(er) throw er;
//				console.log(fd);
//				fs.read(fd,buf,0,buf.length,0,(err,byte)=>{
//					if(err) throw err;
//					console.log(byte.toString());//数据长度
//					console.log(buf.slice(0, byte).toString());//截取数据
//				})
//			})
//		},10);
//	})
//})


var d =require('domain').create();
var fs=require("fs");
function readSomeFile(fileName,cb){
	fs.readFile(fileName,'utf8',d.bind((er,data)=>{
//		console.log(er,data?data:null);
		console.log(er,data?data.toString():null);
//		return cb(er,data?JSON.parse(data):null);
	}));
	fs.readFile(fileName,'utf8',d.intercept((data)=>{
		console.log(null,data);
//		return cb(null,JSON.parse(data));
	}));
}
d.on('eror',(er)=>{
	throw er;
})
readSomeFile('p.html','cb');
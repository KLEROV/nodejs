//var net = require('net')
//// 检测端口是否被占用
//function portIsOccupied (port) {
//// 创建服务并监听该端口
//var server = net.createServer().listen(port)
//server.on('listening', function () { // 执行这块代码说明端口未被占用
//  server.close() // 关闭服务
//  console.log('The port【' + port + '】 is available.') // 控制台输出信息
//})
//server.on('error', function (err) {
//  if (err.code === 'EADDRINUSE') { // 端口已经被使用
//  	 console.log('PID:'+ process.pid);
//    console.log('The port【' + port + '】 is occupied, please change other port or kill this port');
////    process.kill(process.pid)
//   
//  }
//})
//}
//// 执行
//var port=3000;
//if(process.argv[2]==='-p'){
//	port=parseInt(process.argv[3]);
//}
//portIsOccupied(port);//用法:node port.js -p 3000

//根据进程名查找PID,且杀死此PID进程
//var cmd=process.platform=='win32'?'tasklist':'ps aux';
//var exec=require("child_process").exec;
//var qname='chrome';
//exec(cmd,(err,stdout,stderr)=>{
//	if(err){return console.log(err);}
//	stdout.split('\n').filter((line)=>{
//		var p=line.trim().split(/\s+/),
//				pname=p[0],
//				pid=p[1];
//				console.log(p);
//		if(pname.toLowerCase().indexOf(qname)>=0&&parseInt(pid)){
////			console.log(pname,pid);
//				process.kill(pid);
//		}
//	})
//})

//根据端口号查找PID,检测端口是否被占用,若占用,则删除占用该端口进程
var net = require('net');
var cmd = 'netstat -ano|findstr ';
var exec = require("child_process").exec;

function portIsOccupied(port) {
	// 创建服务并监听该端口
	var server = net.createServer().listen(port)
	server.on('listening', function() { // 执行这块代码说明端口未被占用
		server.close() // 关闭服务
		console.log('The port【' + port + '】 is available.') // 控制台输出信息
	})
	server.on('error', function(err) {
		if(err.code === 'EADDRINUSE') { // 端口已经被使用
			console.log('The port【' + port + '】 is occupied and will kill this port');
			exec(cmd + port, (err, stdout, stderr) => {
				if(err) {
					return console.log(err);
				}
				stdout.split().filter((line) => {
					var p = line.trim().split(/\s+/), //\s匹配任何空白字符,包括空格、制表符、换页符、换行符
						pid = p[4];
					process.kill(pid);
				})
			})
		}
	})
}
// 执行
var port = 3000;
if(process.argv[2] === '-p') {
	console.log(process.argv[2 ]);
	port = parseInt(process.argv[3]);
}
portIsOccupied(port);//用法:node port.js -p 3000
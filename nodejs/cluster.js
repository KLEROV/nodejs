//cluster.fork();新建若干worker进程,创建子进程
//cluster.on("online",(errr,worker,signal)=>{});主进程收到子进程的消息后,这时会触发 online 事件
//cluster.on("listening",(errr,worker,signal)=>{});工作子进程监听的地址和端口
//cluster.on('exit',(worker,code,signal)=>{});工作子进程退出时,cluster 模块会分发此事件

//var cluster = require("cluster");
//var http=require("http");
//var numCPUs=require("os").cpus().length;//检测cpu数量
//if(cluster.isMaster){//判断是否为主要进程
//	console.log(`Master ${process.pid} is running`);
//	for(var i=0;i<numCPUs;i++){
//		cluster.fork();//新建若干worker进程,创建子进程
//	}
//	cluster.on("listening",(errr,worker,signal)=>{
////		console.log(`worker ${worker.process.pid} working`);
//	})
//	cluster.on('exit',(worker,code,signal)=>{
//		console.log(`worker ${worker.process.pid} died`);
//		cluster.fork();//可用于重新启动子进程
//	})
//}else{
//	http.createServer((req,res)=>{
//		res.writeHead(200,{"Content-Type":"text/plain;charset=utf8"});
//		res.end("hello world,你好,世界\n");
//	}).listen(3000,()=>{
//		console.log("服务端显示")
//	})
//	console.log(`worker ${process.pid} started`);
//	console.log(`worker ${process.pid} cluster.isMaster ${cluster.isMaster}`);
//}



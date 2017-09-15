//console.log("程序执行结束0");//执行顺序1
//process.on("exit",function(code){//进程准备退出触发  循环执行
//	setTimeout(function(){
//		console.log("测试退出执行");
//	},1000)
//	console.log(code);
//})
//console.log("程序执行结束1");//执行顺序2
//process.on("beforeExit",function(code){//循环执行
//	setTimeout(function(){
//		console.log("测试退出前执行");
//	},1000)
//	console.log(code);
//})
//console.log("程序执行结束2");//执行顺序3



process.stdout.write("输出到终端:hello world"+"\n");//输出到终端
//process.argv.forEach(function(val,index,arr){//通过参数读取
//	console.log(index+":"+val+","+arr);
//})
console.log(process.argv);//[执行软件路径,文件路径]
//console.log(process.stdout);

console.log("执行路局:"+process.execPath);//执行路局,执行软件路径
console.log("平台信息"+process.platform);//平台信息,系统版本
console.log(process.execArgv);//用法待测试
console.log(process.env);//返回当前shell的环境变量
console.log(process.exitCode);//用法待测试
console.log(process.version);//返回版本号
console.log(process.pid);//返回当前进程的进程号
console.log(process.title);//返回当前进程名
console.log(process.arch);//返回当前 CPU 的架构
console.log(process.mianModule);//用法待测试


//stdin相关

//process.stdin.resume();
//process.stdin.setEncoding("utf8");
//console.log(11);//执行顺序1
//process.stdin.on("data",function(chunk){
//	process.stdout.write("data:"+chunk);
//	console.log(chunk.toString().indexOf("bye"))
//	if(chunk.toString().indexOf("bye")>-1){
//		process.stdin.emit("end");//输入结束
//		console.log("执行");//结束时执行顺序2
//	}
//})
//console.log(22);//执行顺序2
//process.stdin.on("end",function(){//输入结束触发
//	process.stdout.write("ending");//结束时执行顺序1
//})
//console.log(33);//执行顺序3

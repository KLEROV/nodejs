//child_process.exec(command[, options], callback);返回最大的缓冲区,并等待进程结束,一次性返回缓冲区的内容
//command:字符串,将要运行的命令,参数使用空格隔开
//options:对象,可以是:
//  cwd ,字符串,子进程的当前工作目录
//  env,对象 环境变量键值对
//  encoding ,字符串,字符编码（默认:'utf8'）
//  shell ,字符串,将要执行命令的Shell(默认:在 UNIX中为/bin/sh,在 Windows中为cmd.exe,Shell应当能识别-c开关在 UNIX中,或 /s/c在Windows中.在Windows中,命令行解析应当能兼容cmd.exe)
//  timeout,数字,超时时间(默认:0)
//  maxBuffer,数字,在 stdout 或 stderr中允许存在的最大缓冲(二进制),如果超出那么子进程将会被杀死(默认:200*1024)
//  killSignal ,字符串,结束信号(默认'SIGTERM')
//  uid,数字,设置用户进程的 ID
//  gid,数字,设置进程组的 ID
//callback :回调函数,包含三个参数error,stdout和stderr

//var fs=require("fs");
//var child_process=require("child_process");
//for(var i=0;i<10;i++){
//	var workerProcess=child_process.exec('node test.js '+i,function(error,stdout,stderr){
//		if(error){
//			console.log(error.stack);
//          console.log('Error code: '+error.code);
//          console.log('Signal received: '+error.signal);
//		}
//		console.log('stdout: ' + stdout);
//		console.log('stderr: ' + stderr);
//	})
//	workerProcess.on('exit',function(code){
//		console.log('子进程已退出,退出码'+code)
//	})
//}


var child_process=require("child_process");
var workerProcess=child_process.exec('node expressFrameWork.js',function(error,stdout,stderr){//运行指定文件
	if(error){
		console.log(error.stack);
        console.log('Error code: '+error.code);
        console.log('Signal received: '+error.signal);
	}
	console.log('stdout: ' + stdout);
	console.log('stderr: ' + stderr);
})
workerProcess.on('exit',function(code){
	console.log('子进程已退出,退出码'+code)
})


//var fs=require("fs");
//var child_process=require("child_process");
//var workerProcess=child_process.exec('rd bmp',function(error,stdout,stderr){//使用cmd中rd命令删除文件夹,使用del删除文件
//	if(error){
//		console.log(error.stack);
//      console.log('Error code: '+error.code);
//      console.log('Signal received: '+error.signal);
//	}
//	console.log('执行完成');
//})
//workerProcess.on('exit',function(code){
//	console.log('子进程已退出,退出码'+code)
//})


//child_process.spawn(command[, args][, options]);返回流 (stdout & stderr),在进程返回大量数据时使用.进程一旦开始执行时spawn()就开始接收响应
//command:将要运行的命令
//args:Array 字符串参数数组
//options Object
//  cwd String 子进程的当前工作目录
//  env Object 环境变量键值对
//  stdio Array|String 子进程的stdio配置
//  detached Boolean 这个子进程将会变成进程组的领导
//  uid Number 设置用户进程的 ID
//  gid Number 设置进程组的 ID

//var fs=require("fs");
//var child_process=require("child_process");
//var workerProcess=child_process.spawn('node',['expressFrameWork.js']);
////标准输出文件stdout,标准错误输出文件stderr
//workerProcess.stdout.on('data',function(data){
//	console.log('stdout'+data);
//})
//workerProcess.stderr.on('data',function(data){
//	console.log('stderr'+data);
//})
//workerProcess.on('close',function(){
//	console.log("子进程已退出,退出码"+code);
//})

//child_process.fork(modulePath[,args][,options]); spawn()方法的特殊形式，用于创建进程
//modulePath:String,将要在子进程中运行的模块
//args:Array 字符串参数数组
//options:Object
//  cwd String 子进程的当前工作目录
//  env Object 环境变量键值对
//  execPath String 创建子进程的可执行文件
//  execArgv Array 子进程的可执行文件的字符串参数数组(默认： process.execArgv)
//  silent Boolean 如果为true,子进程的stdin,stdout和stderr将会被关联至父进程,否则,它们将会从父进程中继承(默认为：false)
//  uid Number 设置用户进程的 ID
//  gid Number 设置进程组的 ID

//var express=require("express");
//var child_process=require("child_process");
//var workProcess=child_process.fork('server.js');
//workProcess.on('close',function(code){
//	console.log('子进程已退出,退出码'+'code');
//})

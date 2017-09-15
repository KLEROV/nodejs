//var spawn=require("child_process").spawn;
//var ls=spawn("node",['expressFrameWork.js','/nodejs']);//spawn("cmd命令",["文件名.文件后缀","文件路径"]);
//ls.stdin.on('data',(data)=>{
//	console.log(`stdout:${data}`);
//})
//ls.stdout.on('data',(data)=>{
//	console.log(`stdout:${data}`);
//})
//ls.stderr.on('data',(data)=>{
//	console.log(`stderr:${data}`);
//})
//ls.on('close',(code)=>{
//	console.log(`子进程退出码:${code}`);
//})

//var exec=require("child_process").exec;
//var ls=exec("node expressFrameWork.js",(err,stdout,stderr)=>{
//	if(err){
//		return console.log(err);
//	}
//	console.log(`stdout:${stdout}`);
//	console.log(`stderr:${stderr}`);
//});//exec("cmd命令 文件名.文件后缀",callback);
//ls.on('exit',(code)=>{
//	console.log(`子进程退出码:${code}`);
//})

//child_process.spawn(command[, args][, options]);

//var spawn=require("child_process").spawn;
//var ls=spawn("type",['make.bat']);
////var ls=spawn("cmd.exe",['file.txt']);
////var ls=spawn("cmd.exe",['README.md']);
//ls.stdout.on('data',(data)=>{
//	console.log(`stdout:${data.toString()}`);//输出:stdout:Microsoft Windows [ 汾 6.1.7601] (c) 2009 Microsoft Corporation
//})
//ls.stderr.on('data',(err)=>{
//	console.log(`stderr:${err.toString()}`);
//})
//ls.on('close',(code)=>{
//	console.log(`code:${code}`);
//})

//child_process.exec(command[, options][, callback])
//  command <String> 要运行的命令,用空格分隔参数
//  options <Object>
//      cwd <String> 子进程的当前工作目录
//      env <Object> 环境变量键值对
//      encoding <String> (默认: 'utf8')
//      shell <String> 用于执行命令的shell(默认:在 UNIX上为 '/bin/sh',在Windows上为 'cmd.exe'.该 shell应该能够理解 UNIX的-c 开关或 Windows 的 /s /c 开关.在 Windows中,命令行的解析应与cmd.exe兼容.)
//      timeout <Number> (默认: 0)
//      maxBuffer <Number> stdout 或 stderr 允许的最大数据量(以字节为单位). 如果超过限制,则子进程会被终止.(默认:200*1024)
//      killSignal <String> | <Integer> (默认:'SIGTERM')
//      uid <Number> 设置该进程的用户标识.(详见 setuid(2))
//      gid <Number> 设置该进程的组标识.(详见 setgid(2))
//  callback <Function> 当进程终止时调用,并带上输出.
//      error <Error>
//      stdout <String> | <Buffer>
//      stderr <String> | <Buffer>
//  返回: <ChildProcess>
//衍生一个 shell,然后在 shell 中执行 command,且缓冲任何产生的输出.
//注意:不要把未经检查的用户输入传入到该函数. 任何包括 shell 元字符的输入都可被用于触发任何命令的执行.

//var exec = require("child_process").exec;
//exec('more *.js | find/i/c',(error, stdout, stderr)=>{//
//	if(error){
//		return console.log(`exec error: ${error}`);
//	}
//	console.log(`stdout:${stdout}`);
//	console.log(`stderr:${stderr}`);
//}).on("close",(code)=>{
//	console.log(`退出码:${code}`);
//})

//var exec = require("child_process").exec;
//exec('type README.md',(error, stdout, stderr)=>{//type、more可在windows系统下打开常见不同格式文件(包括图片、视频),cat在Linux下打开文件,
//	if(error){
//		return console.log(`exec error: ${error}`);
//	}
//	console.log(`stdout:${stdout}`);
//	console.log(`stderr:${stderr}`);
//}).on("close",(code)=>{
//	console.log(`退出码:${code}`);
//})


//child_preocess.execFile(file[,args][,options][,callback]);
//  file <String> 要运行的可执行文件的名称或路径
//  args <Array> 字符串参数列表
//  options <Object>
//      cwd <String> 子进程的当前工作目录
//      env <Object> 环境变量键值对
//      encoding <String> (默认: 'utf8')
//      timeout <Number> (默认: 0)
//      maxBuffer <Number>stdout或stderr允许的最大数据量(以字节为单位).如果超过限制,则子进程会被终止.(默认:200*1024)
//      killSignal <String> | <Integer> (默认: 'SIGTERM')
//      uid <Number> 设置该进程的用户标识.(详见 setuid(2))
//      gid <Number> 设置该进程的组标识.(详见 setgid(2))
//  callback <Function> 当进程终止时调用,并带上输出.
//      error <Error>
//      stdout <String> | <Buffer>
//      stderr <String> | <Buffer>
//  返回: <ChildProcess>
//它支持和 child_process.exec() 一样的选项.由于没有衍生 shell,因此不支持像 I/O 重定向和文件查找这样的行为.

//var execFile=require("child_process").execFile('quse.exe',(error,stdout,stderr)=>{
//	//效果实现,若为其他格式文件报错Error: spawn UNKNOWN
//	if(error){
//		return console.log(`error:${error}`);
//	}else{
//		console.log(`stdout:${stdout}`);
//		console.log(`stderr:${stderr}`);
//	}
//	
//}).on('close',(code)=>{
//	console.log(`退出码:${code}`);
//})

//child_process.fork(moudlePath[,args][,options]);
//  modulePath <String> 要在子进程中运行的模块
//  args <Array> 字符串参数列表
//  options <Object>
//      cwd <String> 子进程的当前工作目录
//      env <Object> 环境变量键值对
//      execPath <String> 用来创建子进程的执行路径
//      execArgv <Array> 要传给执行路径的字符串参数列表(默认: process.execArgv)
//      silent <Boolean> 如果为true,则子进程中的stdin、stdout和stderr会被导流到父进程中,否则它们会继承自父进程,详 child_process.spawn()的stdio中的 'pipe' 和 'inherit'选项. (默认: false)
//      stdio <Array> 支持child_process.spawn()的stdio选项的数组版本. 当提供了该选项,则它会覆盖silent.该数组必须包含一个值为'ipc'的子项,否则会抛出错误.例如 [0, 1, 2, 'ipc'].
//      uid <Number> 设置该进程的用户标识.(详见 setuid(2))
//      gid <Number> 设置该进程的组标识.(详见 setgid(2))
//  返回: <ChildProcess>
//child_process.fork() 方法是 child_process.spawn() 的一个特殊情况,专门用于衍生新的 Node.js 进程. 跟 child_process.spawn() 一样返回一个 ChildProcess 对象. 返回的 ChildProcess 会有一个额外的内置的通信通道,它允许消息在父进程和子进程之间来回传递. 详见 child.send().
//衍生的 Node.js 子进程与两者之间建立的 IPC 通信信道的异常是独立于父进程的. 每个进程都有自己的内存,使用自己的 V8 实例. 由于需要额外的资源分配,因此不推荐衍生大量的 Node.js 进程.
//默认情况下,child_process.fork() 会使用父进程中的 process.execPath 衍生新的 Node.js 实例. options 对象中的 execPath 属性可以替换要使用的执行路径.
//使用自定义的 execPath 启动的 Node.js 进程,会使用子进程的环境变量 NODE_CHANNEL_FD 中指定的文件描述符(fd)与父进程通信. fd 上的输入和输出期望被分割成一行一行的 JSON 对象.
//注意,不像 POSIX 系统回调中的 fork(2),child_process.fork() 不会克隆当前进程.

//var cp=require("child_process");
////var n=cp.fork(__dirname+'/server.js');
//var n=cp.fork('server.js');
//n.on('message',(m)=>{
//	console.log(`PARENT got message:${m}`)
//});
//n.send("hello world");//此内容未体现


//child_process.spawn(command[, args][, options]);

//const spawn = require('child_process').spawn;
//const ls = spawn('ls', ['-lh', '/usr']);
//ls.stdout.on('data', (data) => {
//console.log(`stdout: ${data}`);
//});
//ls.stderr.on('data', (data) => {
//console.log(`stderr: ${data}`);
//});
//ls.on('close', (code) => {
//console.log(`子进程退出码：${code}`);
//});

//var spawn = require('child_process').spawn;
//var ps = spawn('tasklist', ['MsMpLics.dll']);//查看进程状态
//var grep = spawn('find', ['quse.exe']);
//ps.stdout.on('data', (data) => {
//grep.stdin.write(data);
//});
//ps.stderr.on('data', (data) => {
//console.log(`ps stderr: ${data}`);
//});
//ps.on('close', (code) => {
//if (code !== 0) {
//  console.log(`ps 进程退出码：${code}`);
//}
//grep.stdin.end();
//});
//grep.stdout.on('data', (data) => {
//console.log(data.toString());
//});
//grep.stderr.on('data', (data) => {
//console.log(`grep stderr: ${data}`);
//});
//grep.on('close', (code) => {
//if (code !== 0) {
//  console.log(`grep 进程退出码：${code}`);
//}
//});


//const spawn = require('child_process').spawn;
//const child = spawn('node',['expressFrameWork.js']);
//child.stdout.on('data',(data)=>{
//	console.log(data.toString());
//})
//child.on('error', (err) => {
//console.log('启动子进程失败。');
//});

//child_process.execSync(command[,options]);
var spawn=require("child_process").spawn;
var child=spawn(process.argv[0],['expressFrameWork.js'],{
	detached:true,//出现端口占用情况,结束时进程依然继续
	stdio:'ignore'
})
child.unref();

//效果未实现，不明效果
//var fs=require("fs");
//var spawn=require("child_process").spawn;
//var out=fs.openSync('file.txt','r+');
//var err=fs.openSync('file.txt','r+');
//console.log(out);
//var child=spawn(process.argv[0],[],{
//	detached:false,
//	stdio:['ignore',out,err]
//})
//child.unref();


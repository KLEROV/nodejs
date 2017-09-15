var spawn=require("child_process").spawn;
var ls=spawn('ls',["-lh",'/user']);
ls.stdout.on('data',(data)=>{
	console.log(`stdout:${data}`);
})
ls.stderr.on('data',(data)=>{
	console.log(`stderr:${data}`);
})
ls.on('close',(code)=>{
	console.log(`子进程退出码:${code}`);
})
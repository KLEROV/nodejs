var spawn=require("child_process").spawn;
var child=spawn(process.argv[0],['server.js'],{
//	detached:true,
	detached:false,
	stdio:'ignore'
})
child.unref();
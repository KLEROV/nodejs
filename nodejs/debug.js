//cont, c  继续执行
//next, n  下一步
//step, s  跳进函数
//out, o  跳出函数
//pause  暂停运行代码(类似开发者工具中的暂停按钮)
//run  运行脚本(调试器开始时自动运行)
//restart  重新启动脚本
//kill  终止脚本
//setBreakpoint(), sb() 在当前行设置断点
//setBreakpoint(line), sb(line) 在指定行设置断点
//setBreakpoint('fn()'), sb(...) 在函数体的第一条语句设置断点
//setBreakpoint('script.js', 1), sb(...) 在script.js的第1行设置断点
//clearBreakpoint('script.js', 1), cb(...) 清除script.js第1行的断点
x=5;//cmd中使用方式:node deubg debug.js
setTimeout(()=>{
	debugger;
	console.log("world");
},1000);
console.log('hello');

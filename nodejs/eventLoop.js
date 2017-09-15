//按照顺序执行
var events = require("events"); // 引入 events 模块
var eventEmitter = new events.EventEmitter(); // 创建 eventEmitter对象,EventEmitter的核心就是事件触发与事件监听器功能的封装
console.log("接收1?");
var connectHandler = function conected() { // 绑定事件及事件的处理程序
	console.log("连接成功");
	
}
eventEmitter.on("connection", connectHandler); // 绑定 connection 事件处理程序
console.log("接收2?");
eventEmitter.on("data_received", function() { // 使用匿名函数绑定 data_received 事件
	console.log("数据接收成功");
})
console.log("接收3?");
eventEmitter.emit("connection"); // 触发 connection 事件 
console.log("接收4?");
eventEmitter.emit( "data_received"); // 触发事件
console.log("接收5?");
console.log("程序执行完毕");
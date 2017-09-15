//var events = require("events");
//var emitter =new events.EventEmitter();
//emitter.on('some_event', function() {
//	console.log("some_event事件触发");
//});
//emitter.on('some_event', function() {
//	console.log("some_event事件触发");
//});
//setInterval(function() {//间隔1s连续触发
//	emitter.emit("some_event");
//}, 1000);


var events=require("events");
var emitter=new events.EventEmitter();
function remove(arg1,arg2){
	console.log("listener7",arg1,arg2);
}
function remove2(arg1,arg2){
	console.log("listener8",arg1,arg2);
}
emitter.setMaxListeners(3);//设定同一事件绑定回调函数数量上限,默认为10,可使用此方法提升监听器的数量
emitter.on("some_some",remove);
emitter.addListener("some_some",remove2)
emitter.on("some_some",function(arg1,arg2){
	console.log("listener3",arg1,arg2);
})
emitter.once("some_some1",function(arg1,arg2){//once为指定事件注册一个单次监听器,即监听器最多只会触发一次,触发后立刻解除该监听器
	console.log("listener4",arg1,arg2);
})
emitter.on("some_some2",function(arg1,arg2){
	console.log("listener2",arg1,arg2);
})
emitter.on("some_some3",function(arg1,arg2){
	console.log("listener3",arg1,arg2);
})
emitter.emit("some_some",123,456);
emitter.emit("some_some1",1234,4567);
emitter.emit("some_some1",124,457);
emitter.removeListener("some_some",remove);//移除监听器,回调不能为匿名函数,函数数量为1个,多个仅第一个生效
emitter.emit("some_some",1235,4568);
emitter.removeAllListeners("some_some3");//添加参数为移除指定事件监听器,参数唯一;无参数则移除所有事件监听器
emitter.emit("some_some",125,48);
emitter.emit("some_some1",245,58);
emitter.emit("some_some2",12145,1448);
emitter.emit("some_some3",125,48);
console.log(emitter.listeners("some_some"));//返回指定事件的监听器数组

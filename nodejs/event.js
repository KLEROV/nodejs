//var EventEmitter=require("events");
//class MyEmitter extends EventEmitter{}
//var myEmitter=new MyEmitter();
//myEmitter.on("event",(name,jia)=>{
//	console.log(`发生一个故事在${name}${jia}!`);
//})
//myEmitter.emit('event',"wulala","家");//用于触发事件,参数组成:事件名 函数参数

//import EventEmitter from 'events'
//class MyEmitter extends EventEmitter{
//	constructor(){
//		super()
//	}
//}
//var emitter1=new MyEmitter()
//emitter1.on('hello',(usename)=>{
//	console.log("welcome ",usename);
//})
//emitter1.emit('hallo','wulala');

//var EventEmitter=require("events");
//class MyEmitter extends EventEmitter {
//	constructor() {//此部分注释掉显示正常,不明白其存在含义,有待测试
//		super()
//	}
//}
//const emitter1 = new MyEmitter();
//emitter1.on("hello", (username) => {
//	console.log("Welcome:" + username)
//})
//emitter1.emit("hello", "Mike");

//function EventEmitter(){
//	EventEmitter.init.call(this);
//}
//EventEmitter.init=function(){
//	this.domain=null;
//	if(EventEmitter.usingDomains){
//		domain=domain||require("domain");
//		if(domain.active&&!(this instanceof domain.Domain)){
//			this.domain=domain.active;
//		}
//	}
//	if(!this._events||this._events===Object.getPrototypeOf(htis)._events){
//		this._events={};
//		this._eventsCount=0;
//	}
//	this._maxListeners=this.maxListener||undefined;
//}

//var EventEmitter=require('events');
//class MyEmitter extends EventEmitter{
//	constructor(){
//		super()
//	}
//}
//var env=process.env.NODE_ENV
//var emitter1=new MyEmitter();
//emitter1.on('Debug',(err,info)=>{
//	if(err==null){
//		console.log('Debug:'+info);
//	}
//})
//if(env&&env=="production"){
//	emitter1.emit('Debug',new Error('Debug'),null)
//}else{
//	emitter1.emit('Debug',null,'this is debug info')
//}

class person {
	constructor(name) {
			this.name = "12";
		}
		//	static say(){
	say() {
		console.log(this.name);
	}
}

//person.say();
var p = new person();
p.say();

$(".edit-num .rem").live("touchstart", function() {
	var oVal = $(this).next().val();
	var price = parseFloat($(this).next().next().next().val());
	if(oVal > 0) {
		$(this).next().val(oVal - 1);
		var productId = $(this).next().next().next().next().val();
		var num = oVal - 1;
		getTotal(price, 1);
		ProductIdNum(productId, num);
	};
});
$(".edit-num .add").live("touchstart", function() {
	var oVal = parseInt($(this).prev().val());
	var price = parseFloat($(this).next().val());
	$(this).prev().val(oVal + 1);
	var productId = $(this).next().next().val();
	var num = oVal + 1;
	getTotal(price, 0);
	ProductIdNum(productId, num);
});
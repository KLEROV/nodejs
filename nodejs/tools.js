//util.inherits(constructor, superConstructor),Sub继承Base所有原型定义的函数

//var util = require("util");
//function Base() {
//	this.name = "base";
//	this.base = 1992;
//	this.sayHello = function() {
////		console.log("hello" +" "+this.name);//打开不能用console.log()显示
//		return this.name
//	}
//}
//Base.prototype.showName = function() {
//	console.log(this.name);
//	console.log(this);
//	console.log("第一个");
//}
//Base.prototype.showName1 = function() {
//	console.log("第二个");
//}
//Base.prototype.showName2 = function() {
//	console.log("第三个");
//}
//function Sub() {
//	this.name = ("sub");
//}
//util.inherits(Sub, Base);
//var objBase = new Base();
//console.log(objBase.sayHello());
//objBase.showName();
//console.log(objBase);
//var objSub = new Sub();
//objSub.showName();
//objSub.showName1();
//objSub.showName2();
////objSub.sayHello();//Base中的sayHello函数未被继承
//console.log(objSub);

//util.inspect(object,[showHidden],[depth],[color]);将任意对象转换为字符串,至少接收一个object;showHidden为true将输出隐藏信息；depth指定层数控制输出信息多少,默认为2,将shoeHidden设置为true生效;color为 true输出ANSI颜色编码

//var util=require("util");
//function Person(){
//	this.name="boy";
//	this.toString=function(){
//		return this.name;
//	}
//}
//var obj=new Person();
//console.log(util.inspect(obj));//不显示隐藏项
//console.log(util.inspect(obj,true,2,true));//此处设置color为true生效
//console.log(util.inspect(obj,true));
//console.log(util.inspect(obj,true,true));//此处设置color为true不生效

//util.isArray(object);判断是否为数组
//util.isRegExp(object);判断是否为正则
//util.isDate(object);判断是否为日期
//util.isError(object);判断是否为错误对象

var util = require("util");
var arr = [],
	arr1 = new Array(),
	reg = /some regexp/,
	reg1 = new RegExp("another regexp"),
	reg2 = new RegExp(),
	date = new Date(),
	date1 = Date(),
	err = new Error(),
	err1 = new TypeError();
console.log(util.isArray(arr)); //true
console.log(util.isArray(arr1)); //true
console.log(util.isRegExp(reg)); //true
console.log(util.isRegExp(reg1)); //true
console.log(util.isRegExp(reg2)); //true
console.log(util.isDate(date)); //true
console.log(util.isDate(date1)); //false
console.log(util.isError(err)); //true
console.log(util.isError(err1)); //true
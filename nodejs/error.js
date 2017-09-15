//EvalError : 当调用 eval()失败时抛出
//SyntaxError : 当 JavaScript语法错误时抛出
//RangeError : 当一个值不在预期范围内时抛出
//ReferenceError : 当使用未定义的变量时抛出
//TypeError : 当传入错误类型的参数时抛出
//URIError : 当一个全局的 URI处理函数被误用时抛出

//var m=0,n=0;
//try{
//	console.log(m+y);
//}catch(e){
////	throw e;//这会抛出错误
//}

//var fs=require("fs");
//fs.readFile('file.txt',(err,data)=>{
////	if(err) throw err;
//	if(err) return console.log('err');
//	console.log(data.toString());
//})

//var EventEmitter=require("events");
//var ee = new EventEmitter();
//setImmediate(()=>{
//	ee.emit('error',new Error('这会崩溃'));//emit无回调函数
//})

//var fs=require("fs");
//try{//此处try无法捕捉异步API引起的错误
//	fs.readFile('file1.txt',(err,data)=>{
//		if(err) {throw err;return;};
//		console.log(data);
//	})
//}catch(e){
//	console.error(`e:${e}`);
//}
//process.on('uncaughtException',(err)=>{
//	console.error(`error:${e}balalala`)
//})


//var fs=require("fs");
//fs.readFile('file1.txt',(err,data)=>{
//	if(err) {throw err;return;};
//	console.log(data);
//})
//process.on('uncaughtException',(err)=>{//可以捕捉异步API引起的错误
//	console.error(`判断是否生效:${err},结果生效了哈哈`)
//})

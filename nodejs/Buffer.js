//编码方式：utf8  ascii  utf16le  ucs2  base64  hex
//
//var buf=new Buffer(26);//值可为字符串、数组、数字,不可为{}对象;
//var len=buf.write("111////1111,ss,111wwwwwwww11",0,25,"utf-8");//写入缓冲区字符串  开始写入索引  写入字节数  字符编码
//console.log(len);//写入缓冲区的长度受到Buffer实例(字符串、数组、数字)长度影响,小于则为此时长度，大于则为Buffer实例长度


//var buf=new Buffer(128)
//for(var  i=0;i<128;i++){
//	buf[i]=i;
//}
////buf.toString('utf8',0,10);//编码方式  开始读取索引  结束位置
//console.log(buf);
//console.log(buf.toString('utf8',0,10));//输出


//var buf=new Buffer("www.baidu.com");
//var buf=new Buffer(225)
//for(var  i=0;i<225;i++){
//	buf[i]=i;
//}
//console.log(buf);
//console.log(buf.toString());


//buffer实例
//var buf1=new Buffer([111,122,104,126]);
//var buf2=new Buffer("哈喽,这是一段测试");//3组代表一个字
//var buf3=new Buffer("1922");
//console.log(buf1);
//console.log(buf2);
//console.log(buf3);
//console.log(buf1.toString());
//console.log(buf2.toString());
//console.log(buf3.toString());

//两者显示效果一致
//var buf=new Buffer(5);
//buf[0]="23",buf[1]="35",buf[2]="45",buf[3]="35",buf[4]="65";
//var buf1=new Buffer([23,35,45,35,65]);
//console.log(buf);
//console.log(buf1);

//拼接  复制  比较  裁剪  填充
var buf0=new Buffer("zheshiyiduanceshiwenzi");
var buf1=new Buffer("这是");
var buf2=new Buffer("一段");
var buf3=new Buffer("测试");
var buf4=new Buffer("文字");
var buf6=buf0.slice(0,5);//裁剪,结束位置不包括本身
buf4.fill("哈哈");//填充
console.log(buf4);
var buf5=Buffer.concat([buf1,buf2,buf3,buf4]);//拼接
buf1.copy(buf4);//复制对象.copy(复制结果赋值对象);  复制
console.log(buf4.toString());
console.log(buf5.toString());
console.log(buf3.compare(buf2));//返回一个数字，表示 buf3在 buf2之后,返回-1,若为之前返回为1,若为相同返回为0;  比较
console.log(buf3.equals(buf2));//比较两个缓冲区是否相等
console.log(buf6.toString()+" "+buf6.length);

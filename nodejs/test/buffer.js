//Buffer.from(array);Buffer.from()不支持使用映射函数，参数为数组、者字符串、Buffer、TypedArray或ArrayBuffer
//Buffer.from(arrayBuffer[, byteOffset [, length]]);arrayBuffer指TypedArray或ArrayBuffer的.buffer属性
//Buffer.from(buffer)
//Buffer.from(string[, encoding])
//Buffer.alloc(size[, fill[, encoding]]);比 Buffer.allocUnsafe(size) 慢,但可确保新创建的 Buffer 实例绝不会包含旧的和潜在的敏感数据
//Buffer.allocUnsafe(size) 与 Buffer.allocUnsafeSlow(size) 返回一个新建的指定 size 的 Buffer,但它的内容必须被初始化，可以使用 buf.fill(0) 或完全写满。size 小于或等于 Buffer.poolSize 的一半,则 Buffer.allocUnsafe() 返回的 Buffer 实例可能会被分配进一个共享的内部内存池
//var buf=Buffer.alloc(10);//长度为10,以0(转为16进制)填充
//console.log(buf);//<Buffer 00 00 00 00 00 00 00 00 00 00>
//var buf=Buffer.alloc(10,20);//长度为10,以20(转为16进制)填充
//console.log(buf);//<Buffer 14 14 14 14 14 14 14 14 14 14>
//var buf=Buffer.allocUnsafe(10);
//console.log(buf);//<Buffer 00 00 00 00 00 00 00 00 00 00>
//var buf=Buffer.from([1,5,9,12,5,4,2,8,0,12,67]);//不限长度
//console.log(buf);//<Buffer 01 05 09 0c 05 04 02 08 00 0c 43>
//var buf=Buffer.from("test-test");
//console.log(buf);//<Buffer 74 65 73 74 2d 74 65 73 74>
//var buf=Buffer.from("这是一段测试文字","utf8");
//console.log(buf.toString());
//var buf=Buffer.from(["这","是","一","段","测","试","文","字"]);
//console.log(buf);//<Buffer 00 00 00 00 00 00 00 00>
//var arr0=new Uint16Array(11),arr1=new Uint16Array(11);
//arr0[0]=1000;
//arr0[1]=2000;
//arr0[2]=3000;
//arr0[3]=4000;
//arr0[4]=5000;
//arr0[5]=6000;
//arr0[6]=7000;
//arr0[7]=8000;
//arr0[8]=9000;
//arr0[9]=10000;
//arr0[10]=11000;
////arr0[11]=12000;
//arr1[0]=100;
//arr1[1]=200;
//arr1[2]=300;
//arr1[3]=400;
//arr1[4]=500;
//arr1[5]=600;
//arr1[6]=700;
//arr1[7]=800;
//arr1[8]=900;
//arr1[9]=1000;
//arr1[10]=1100;
////arr1[11]=1200;
////arr0=[1000,2000,3000,4000,5000,6000];//此写法报错
//var buf0=Buffer.from(arr0),buf1=Buffer.from(arr1);
//var buf3=Buffer.from(arr0.buffer,0,3);
//console.log("buf0:",buf0);//buf0: <Buffer e8 d0 b8 a0 88 70>
//console.log("buf1:",buf1);//buf1: <Buffer 64 c8 2c 90 f4 58>
//console.log("buf3:",buf3);//buf3: <Buffer e8 03 d0>
//var buf0_1=Buffer.from(arr0.buffer),
//		buf1_1=Buffer.from(arr1.buffer);
//console.log(buf0.buffer);//ArrayBuffer { byteLength: 8192 }
//console.log(buf1.buffer);//ArrayBuffer { byteLength: 8192 }
//console.log("buf0_1:",buf0_1);//buf0_1: <Buffer e8 03 d0 07 b8 0b a0 0f 88 13 70 17>
//console.log("buf1_1:",buf1_1);//buf1_1: <Buffer 64 00 c8 00 2c 01 90 01 f4 01 58 02>



//var arr=new Uint16Array(10);
//arr[0]=10;
//arr[1]=200;
//arr[2]=3000;
//arr[3]=4;
//arr[4]=2354;
//arr[5]=260;
//arr[6]=123;
//arr[7]=432;
//arr[8]=354;
//arr[9]=20;
//var buf=Buffer.from(arr);//拷贝arr的内容
//var buf1=Buffer.from(arr.buffer);//共享arr的内容
//var buf2=Buffer.from(buf);//拷贝buf的内容
//var buf3=Buffer.from(buf1);//拷贝buf1的内容
//console.log(buf.buffer);//ArrayBuffer { byteLength: 8192 }
//console.log("buf:",buf);//buf: <Buffer 0a c8 b8 04 32 04 7b b0 62 14>
//console.log("buf1:",buf1);//buf1: <Buffer 0a 00 c8 00 b8 0b 04 00 32 09 04 01 7b 00 b0 01 62 01 14 00>
//console.log("buf2:",buf2);//buf: <Buffer 0a c8 b8 04 32 04 7b b0 62 14>
//console.log("buf3:",buf3);//buf1: <Buffer 0a 00 c8 00 b8 0b 04 00 32 09 04 01 7b 00 b0 01 62 01 14 00>
//arr[0]=1;
//console.log("buf:",buf);//buf: <Buffer 0a c8 b8 04 32 04 7b b0 62 14>
//console.log("buf1:",buf1);//buf1: <Buffer 01 00 c8 00 b8 0b 04 00 32 09 04 01 7b 00 b0 01 62 01 14 00>
//console.log("buf2:",buf2);//buf: <Buffer 0a c8 b8 04 32 04 7b b0 62 14>
//console.log("buf3:",buf3);//buf1: <Buffer 0a 00 c8 00 b8 0b 04 00 32 09 04 01 7b 00 b0 01 62 01 14 00>

//var arr=new Uint16Array(20);
//var buf=Buffer.from(arr.buffer,0,10);
//console.log(buf.length);

//TypedArray.from(source[,mapFn[,thisArg]]);
//var buf=Buffer.from([1,3,5,7,9]);
//for(var i of buf){
//	console.log(i);
//}
//var buf1=Buffer.alloc(5,9);
//console.log("buf1",buf1);
//buf1.fill("abcdegh");//若不足则重复显示,超出部分不显示
//console.log("buf1",buf1);
//console.log(buf.values());
//console.log(buf.keys());
//console.log(buf.entries());
//var buf2=Buffer.allocUnsafe(11);//未初始化,可能包含敏感数据
//console.log("buf2",buf2);
//buf2.fill(0);//可用于清除Buffer中敏感数据，使用指定字符填充,初始化
//console.log("buf2",buf2);
//var buf3=Buffer.allocUnsafeSlow(23);////未初始化,可能包含敏感数据
//console.log("buf3",buf3);
//buf3.fill(0);
//var store=[];
//socket.on('readable',()=>{//socket提示not defined
//	var data=socket.read();
//	data.copy(buf3,0,0,0,10);
//	store.push(buf3);
//	console.log("buf3",buf3);
//})

//Buffer.byteLength(string,[encoding]);
//string:<String>|<Buffer>|<TypedArray>|<DataView>|<ArrayBuffer>要计算长度的值

//var str='\u00bd+\u00bc=\u00be';
//var str1='\u00bd';
//var st="￥";
//console.log(str);
//console.log(str1);
//console.log(`${str}:${str.length}个字符,`+`${Buffer.byteLength(str,'utf8')}个字节`);
//console.log(str+":"+str.length+"个字符,"+Buffer.byteLength(str,'utf8')+"个字节");
//console.log(`${Buffer.byteLength(st,'utf8')}个字节`);//中文文字中文符号占3个字节,字母数字英文字符占一个字节,部分除外

//Buffer.compare(buf1,buf2);

//var buf=Buffer.from([1,2,6,8,12]);
//var buf1=Buffer.from([1]);
//var buf2=Buffer.from("1");//<Buffer 30>
//console.log(Buffer.compare(buf,buf1));//输出：1
//console.log(Buffer.compare(buf1,buf2));//输出:-1
//console.log(Buffer.compare(buf,buf2));//输出:-1
//var arr=[buf,buf1,buf2];
//console.log(arr.sort(Buffer.compare));//输出:[ <Buffer 01>, <Buffer 01 02 06 08 0c>, <Buffer 31> ]
//console.log(Buffer.from("	"));//<Buffer 09>

//Buffer.concat(list[,totalLength]);
//var buf=Buffer.from([12,3,4,5]);
//var buf1=Buffer.from([6,7,8,9]);
//var buf2=Buffer.from("123");
//var totalLength=buf.length+buf1.length+buf2.length;
//console.log(Buffer.concat([buf,buf1,buf2],totalLength));//输出<Buffer 0c 03 04 05 06 07 08 09 31 32 33>,不足以16进制00填充,超出部分不显示
//console.log(totalLength);//输出11
//var buf=Buffer.from([1,2,3,4,5,6]);
//var buf2=Buffer.from(buf.buffer);
//console.log(buf);//输出<Buffer 01 02 03 04 05 06>
//console.log(buf2);//输出<Buffer 01 02 03 04 05 06 00 00 00 ba 4a 00 00 00 00 00 00 b4 4a 00 00 00 00 00 e0 ff 4b 00 00 00 00 00 0a 00 00 00 00 00 00 00 08 00 4c 00 00 00 00 00 05 00 ... >
//buf[3]=22;//更改值时必须为同类型值,buf[index]
//console.log(buf);//输出<Buffer 01 02 16 04 05 06>
//console.log(buf2);//输出<Buffer 01 02 16 04 05 06 00 00 00 ba 4a 00 00 00 00 00 00 b4 4a 00 00 00 00 00 e0 ff 4b 00 00 00 00 00 0a 00 00 00 00 00 00 00 08 00 4c 00 00 00 00 00 05 00 ... >

//Buffer.isBuffer(obj);

//var buf=Buffer.from([1,2]);
//var str="123";
//var arr=[1,2];
//var obj={"name":"hehe"};
//var num=123;
//console.log(Buffer.isBuffer(buf));//输出true
//console.log(Buffer.isBuffer(str));//输出false
//console.log(Buffer.isBuffer(arr));//输出false
//console.log(Buffer.isBuffer(obj));//输出false
//console.log(Buffer.isBuffer(num));//输出false

//Buffer.isEncoding(encoding);
//var en="utf8";
//var en1="ascii";
//var en2="haha";
//console.log(Buffer.isEncoding(en));//输出true
//console.log(Buffer.isEncoding(en1));//输出true
//console.log(Buffer.isEncoding(en2));//输出false

//Buffer.poolSize;//默认为8192;用于决定预分配的、内部 Buffer实例池的大小的字节数,此值可修改


//buf.conpare(target[,targetStart[,targetEnd[,sourceSart[,sourceEnd]]]]);
//target <Buffer> 要比较的 Buffer
//targetStart target 中开始对比的偏移量. 默认: 0
//targetEnd target 中结束对比的偏移量(不包含). 当 targetStart 为 undefined 时忽略. 默认: target.length
//sourceStart buf 中开始对比的偏移量.当 targetStart 为 undefined 时忽略.默认: 0
//sourceEnd buf 中结束对比的偏移量(不包含).当 targetStart 为 undefined 时忽略. 默认: buf.length

//var buf=Buffer.from([3,2,3]);
//var buf1=Buffer.from([1,3,2]);
//var buf2=Buffer.from([3,2,5]);
//var buf3=Buffer.from("asd");
//var buf4=Buffer.from("ads");
//var buf5=Buffer.from("abcd");
//console.log(buf.compare(buf));//输出0
//console.log(buf.compare(buf1));//输出1
//console.log(buf.compare(buf2));//输出-1
//console.log(buf1.compare(buf2));//输出-1
//console.log(buf.compare(buf3));//输出-1
//console.log(buf3.compare(buf4));//输出1
//console.log(buf3.compare(buf5));//输出1
//console.log(buf4.compare(buf5));//输出1
//var buf1 = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//var buf2 = Buffer.from([5, 6, 7, 8, 9, 1, 2, 3, 4]);
//console.log(buf1.compare(buf2));//输出-1
//console.log(buf1.compare(buf2, 0, 5, 4,9));//输出0
//console.log(buf1.compare(buf2, 6, 7, 1,2));//输出0
//console.log(buf1.compare(buf2, 0, 3, 0, 3));//输出-1
//console.log(buf1.compare(buf2, 0, 5, 4));//输出0
//console.log(buf1.compare(buf2, 5, 6, 5));//输出1

//buf.copy(target[,targetStart[,sourceStart[,sourceEnd]]]);
//target <Buffer> 要拷贝进的Buffer
//targetStart target中开始拷贝进的偏移量,默认:0
//sourceStart buf中开始拷贝的偏移量.当targetStart为undefined 时忽略.默认: 0
//sourceEnd buf 中结束拷贝的偏移量(不包含).当 sourceStart为 undefined时忽略.

//var buf=Buffer.allocUnsafe(10).fill("0");
//var buf1=Buffer.allocUnsafe(10).fill("1");
//for(var i=0;i<10;i++){
//	buf[i]=i+97;
//}
//buf.copy(buf1,4,3,7);
//console.log(buf);//输出<Buffer 61 62 63 64 65 66 67 68 69 6a>
//console.log(buf1);//输出<Buffer 31 31 31 31 64 65 66 67 31 31>

//var buf=Buffer.allocUnsafe(26);
//for(var i=0;i<26;i++){
//	buf[i]=i+97;
//}
//console.log(buf.toString());//输出abcdefghijklmnopqrstuvwxyz
//buf.copy(buf,16,10,20);
//console.log(buf.toString());//输出abcdefghijklmnopklmnopqrst,覆盖缓冲区中原位置数据

//buf.entries();创建并返回一个 [index,byte] 形式的迭代器
//var buf=Buffer.from('this is a test');
//console.log(buf.entries());
//for(var pair of buf.entries()){
//	console.log(pair);
//}

//buf.equals(otherBuffer);
//buf.fill(value[, offset[, end]][, encoding])
//var buf=Buffer.from([1,2,3,4,5,6]);
//var buf1=Buffer.from([5566,767,8,5,7]);
//var buf2=Buffer.from([1,2,3,4,5,6]);
//var buf3=Buffer.from("ABC");
//var buf4=Buffer.from('414243', 'hex');
//console.log(buf.equals(buf1));//false
//console.log(buf.equals(buf2));//true
//console.log(buf3.equals(buf4));//true
//var buf5=Buffer.allocUnsafe(10);
//console.log(buf5);
//buf5.fill("123",2,9);
//console.log(buf5);

//buf.indexOf(value[,byteOffset][,encoding]);
//  value <String> | <Buffer> | <Integer> 要搜索的值
//  byteOffset <Integer> buf 中开始搜索的位置.默认: 0
//  encoding <String>如果 value是一个字符串,则这是它的字符编码.默认:'utf8'
//  返回: <Integer>buf中value首次出现的索引,如果 buf没包含 value则返回 -1
//如果 value 是：
//  字符串,则value根据encoding的字符编码进行解析
//	Buffer,则 value会被作为一个整体使用.如果要比较部分Buffer可使用buf.slice()
//  数值,则value会解析为一个0至 255之间的无符号八位整数值

//var buf=Buffer.from([1,2,3,5,1,2,3,3,1,3,2,1]);
//var buf1=Buffer.from([1,2,3]);
//var buf2=Buffer.from("dfhdfhdhd");
//var buf3 = Buffer.from('\u039a\u0391\u03a3\u03a3\u0395', 'ucs2');
//console.log(buf.indexOf(buf1,0,'utf8'));//输出0
//console.log(buf.indexOf(buf1,5,'utf8'));//输出-1
//console.log(buf.indexOf(buf1,-5,'utf8'));//输出-1
//console.log(buf.indexOf(buf2.slice(0,4),0,'utf8'));//输出-1

//console.log(buf3.indexOf('\u03a3', 0, 'ucs2'));//4
//console.log(buf3.indexOf('\u03a3', -4, 'ucs2'));//6


//buf.includes(value[, byteOffset][, encoding]);

//console.log(buf.includes(1));//true
//console.log(buf.includes(1,12));//fslae
//console.log(buf.includes("1"));//false
//console.log(buf.includes(buf1));//true
//console.log(buf2.includes("df"));//true
//console.log(buf2.includes("fdg"));//false
//console.log(buf2.includes(buf2.slice(4,7)));//true

//buf.key();

//for(var key of buf.keys()){
//	console.log(key);//输出下标序列
//}
//for(var key of buf2.keys()){
//	console.log(key);//输出下标序列
//}

//buf.lastIndexOf(value[,byteOffset][,encoding]);

//console.log(buf.lastIndexOf("1",0));//-1
//console.log(buf.lastIndexOf(1,0));//0
//console.log(buf2.lastIndexOf("df",0));//0
//console.log(buf3.lastIndexOf('\u03a3', null, 'ucs2'));//-1
//console.log(buf3.lastIndexOf('\u03a3', -5, 'ucs2'));//4
//console.log(buf3.lastIndexOf('\u03a3', 3, 'ucs2'));//-1
//console.log(buf3.lastIndexOf('\u03a3', 5, 'ucs2'));//4
//console.log(buf3.lastIndexOf('\u03a3', 18, 'ucs2'));//6
//console.log(buf3.lastIndexOf('\u03a3', 3));//-1
//console.log(buf3.lastIndexOf('\u03a3', 5));//-1
//console.log(buf3.lastIndexOf('\u03a3', 18));//-1
//var buf5=Buffer.alloc(8,7);
//console.log(buf5);//<Buffer 07 07 07 07 07 07 07 07>
//console.log(buf5.length);//13
//buf5.write("hahahghfghfah",0);
//console.log(buf5.length);//13
//console.log(buf5);//<Buffer 68 61 68 61 68 67 68 66>

//var buf=Buffer.allocUnsafe(10);
//buf.write("fjvniufvniudfv",0);
//console.log(buf);//<Buffer 66 6a 76 6e 69 75 66 76 6e 69>
//console.log(buf.length);//10
//buf=buf.slice(2,8);
//console.log(buf);//<Buffer 76 6e 69 75 66 76>
//console.log(buf.length);//6

//buf.readDoubleBE(offset[,noAssert]);返回大尾数
//buf.readDoubleLE(offset[,noAssert]);返回小尾数
//offset 开始读取的位置,必须满足:0<=offset<= buf.length-8
//noAssert 是否跳过offset检验？默认:false
//用指定的尾数格式(readDoubleBE()返回大尾数,readDoubleLE()返回小尾数)从 buf中指定的 offset读取一个64位双精度值,设置 noAssert为true则offset可超出 buf的末尾,但后果是不确定的

//var buf=Buffer.from([1,2,3,46,7,8,9,243]);
//console.log(buf.readDoubleBE());//8.20817249461227e-304
//console.log(buf.readDoubleLE());//-1.3673223518693498e+246
////console.log(buf.readDoubleLE(444));//报错,RangeError: Index out of range
////console.log(buf.readDoubleLE(444,true));//报错,C:\Program Files\nodejs\node.exe: src\node_buffer.cc:751: Assertion `(offset + sizeof(T)) <= (ts_obj_length)' failed.

//buf.readFloatBE(offset[,noAssert]);
//buf.readFloatLE(offset[,noAssert]);

//offset 开始读取的位置,必须满足:0 <= offset <= buf.length - 4
//noAssert 是否跳过 offset 检验？默认: false
//  返回: <Number>
//用指定的尾数格式(readFloatBE()返回大尾数,readFloatLE()返回小尾数)从 buf中指定的offset读取一个32位浮点值,设置 noAssert为 true 则 offset 可超出 buf 的末尾,但后果是不确定的
//var buf=Buffer.from([1,2,3,4,5,6,7,8,9]);
//console.log(buf.readFloatBE());//2.387939260590663e-38
//console.log(buf.readFloatLE());//1.539989614439558e-36
//console.log(buf.readFloatBE(0,true));//3.879708020057588e-37
//console.log(buf.readFloatBE(2,true));//3.879708020057588e-37
////console.log(buf.readFloatLE(6));//报错,RangeError: Index out of range
///console.log(buf.readFloatLE(6,true));//提示: C:\Program Files\nodejs\node.exe: src\node_buffer.cc:751: Assertion `(offset + sizeof(T)) <= (ts_obj_length)' failed.影响后续执行
//console.log(buf.readFloatLE(2,true));

//buf.readInt8(offset[,noAssert]);从buf中指定的offset读取一个有符号的8位整数值,读取的整数值会被解析为二进制补码值
//offset 开始读取的位置,必须满足:0 <= offset <= buf.length - 1

//var buf=Buffer.from([1,2,3,-2,-3,4]);
//console.log(buf.readInt8());//1
//console.log(buf.readInt8(0,true));//1
//console.log(buf.readInt8(2));//3
//console.log(buf.readInt8(2,true));//3
////console.log(buf.readInt8(6));//报错,RangeError: Index out of range
//console.log(buf.readInt8(6,true));//undefined,不影响后续执行
//console.log(buf.readInt8(2));//3

//buf.readInt16BE(offset[,noAssert]);
//buf.readInt16LE(offset[,noAssert]);
//offset 开始读取的位置,必须满足:0 <= offset <= buf.length - 2.用指定的尾数格式(readInt16BE()返回大尾数,readInt16LE()返回小尾数)从buf中指定的 offset读取一个有符号的16位整数值.设置noAssert为true则offset可超 buf的末尾,但后果是不确定的.从 Buffer中读取的整数值会被解析为二进制补码值

//var buf=Buffer.from([1,3,4,5,6,-1,-3]);//不同值结果不一样,可能会出现负值
//console.log(buf.readInt16BE());//259
//console.log(buf.readInt16LE());//769
//console.log(buf.readInt16BE(2));//1029
//console.log(buf.readInt16LE(2));//1284
//console.log(buf.readInt16BE(2,true));//1029
//console.log(buf.readInt16LE(2,true));//1284
////console.log(buf.readInt16BE(6));//报错,RangeError: Index out of range
////console.log(buf.readInt16LE(6));//报错,RangeError: Index out of range
//console.log(buf.readInt16BE(6,true));//-768
//console.log(buf.readInt16LE(6,true));//253
//console.log(buf.readInt16BE(-2,true));//0
//console.log(buf.readInt16LE(-2,true));//0


//buf.readInt32BE(offset[,noAssert]);
//buf.readInt32LE(offset[,noAssert]);
//offset 开始读取的位置,必须满足:0 <= offset <= buf.length - 4.用指定的尾数格式(readInt32BE()返回大尾数,readInt32LE()返回小尾数)从buf中指定的 offset读取一个有符号的32位整数值.设置noAssert为true则offset可超 buf的末尾,但后果是不确定的.从 Buffer中读取的整数值会被解析为二进制补码值

//var buf=Buffer.from([1,3,4,5,6,-1,-3]);//不同值结果不一样,可能会出现负值
//console.log(buf.readInt32BE());//16974853
//console.log(buf.readInt32LE());//84148993
//console.log(buf.readInt32BE(2));//67438335
//console.log(buf.readInt32LE(2));//-16382716
//console.log(buf.readInt32BE(2,true));//67438335
//console.log(buf.readInt32LE(2,true));//-16382716
////console.log(buf.readInt32BE(6));//报错,RangeError: Index out of range
////console.log(buf.readInt32LE(6));//报错,RangeError: Index out of range
//console.log(buf.readInt32BE(6,true));//-50331648
//console.log(buf.readInt32LE(6,true));//253
//console.log(buf.readInt32BE(-2,true));//0
//console.log(buf.readInt32LE(-2,true));//0

//buf.readIntBE(offset, byteLength[, noAssert])
//buf.readIntLE(offset, byteLength[, noAssert])

//offset 开始读取的位置,必须满足:0<=offset<=buf.length-byteLength
//  byteLength 要读取的字节数.必须满足:0<byteLength<=6
//  noAssert 是否跳过offset和byteLength校验?默认:false
//  返回: <Integer>整数
//从 buf中指定的offset读取 byteLength个字节,且读取的值会被解析为二进制补码值.最高支持48位精度.设置noAssert为true则offset可超出 buf的末尾,但后果是不确定的

//var buf=Buffer.from([1,2,3,5,45,-1,-3]);
//console.log(buf.readIntBE());//undefined,不影响后续执行
//console.log(buf.readIntLE());//1
//console.log(buf.readIntBE(2));//2
//console.log(buf.readIntLE(2));//3
//console.log(buf.readIntBE(2,true));//3
//console.log(buf.readIntLE(2,true));//3
//console.log(buf.readIntBE(6));//254
//console.log(buf.readIntLE(6));//252
//console.log(buf.readIntBE(6,true));//-3
//console.log(buf.readIntLE(6,true));//-3
////console.log(buf.readIntBE(-2,true));//报错,RangeError: Index out of range
////console.log(buf.readIntLE(-2,true));//报错,RangeError: Index out of range


//buf.readUInt8(offset[,noAssert]);
//offset <Integer>开始读取的位置,必须满足:0<=offset<=buf.length-1,从 buf中指定的offset读取一个无符号的8位整数值
//var buf=Buffer.from([1,2,3,54,-1,34]);
//console.log(buf.readUInt8());//1
//console.log(buf.readUInt8(2));//3
//console.log(buf.readUInt8(2,true));//3
////console.log(buf.readUInt8(6));//RangeError: Index out of range
////console.log(buf.readUInt8(6,true));//RangeError: Index out of range
////console.log(buf.readUInt8(-2));//RangeError: Index out of range
//console.log(buf.readUInt8(-2,true));//undefined,不影响后续执行
//console.log(buf.readUInt8());

//buf.readUInt16BE(offset[, noAssert])
//buf.readUInt16LE(offset[, noAssert])
//offset <Integer> 开始读取的位置,必须满足:0 <= offset <= buf.length - 2
//noAssert <Boolean> 是否跳过 offset 检验？默认: false
//  返回: <Integer>
//用指定的尾数格式(readUInt16BE()返回大尾数,readUInt16LE()返回小尾数)从 buf中指定的offset读取一个无符号的16位整数值.设置noAssert为true则offset可超出 buf的末尾,但后果是不确定的

//var buf=Buffer.from([1,3,4,5,6,-1,-3]);
//console.log(buf.readInt16BE());//259
//console.log(buf.readInt16LE());//769
//console.log(buf.readInt16BE(2));//1029
//console.log(buf.readInt16LE(2));//1284
//console.log(buf.readInt16BE(2,true));//1029
//console.log(buf.readInt16LE(2,true));//1284
////console.log(buf.readInt16BE(6));//报错,RangeError: Index out of range
////console.log(buf.readInt16LE(6));//报错,RangeError: Index out of range
//console.log(buf.readInt16BE(6,true));//-768
//console.log(buf.readInt16LE(6,true));//253
//console.log(buf.readInt16BE(-2,true));//0
//console.log(buf.readInt16LE(-2,true));//0
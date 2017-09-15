//os模块
//os.tmpdir()返回操作系统的默认临时文件夹
//os.endianness()返回 CPU 的字节序,可能的是 "BE" 或 "LE"
//os.hostname()返回操作系统的主机名
//os.type()返回操作系统名
//os.platform()返回操作系统名
//os.arch()返回操作系统 CPU 架构,可能的值有 "x64"、"arm" 和 "ia32"
//os.release()返回操作系统的发行版本
//os.uptime()返回操作系统运行的时间,以秒为单位
//os.loadavg()返回一个包含 1、5、15 分钟平均负载的数组
//os.totalmem()返回系统内存总量,单位为字节
//os.freemem()返回操作系统空闲内存量,单位是字节
//os.cpus()返回一个对象数组,包含所安装的每个 CPU/内核的信息:型号、速度(单位 MHz)、时间(一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象)
//os.networkInterfaces()获得网络接口列表
//os.EOL定义了操作系统的行尾符的常量


//var http=require("http");
//var os=require("os");
//var util=require("util");//用于对象转为字符串,util.inspect();
//http.createServer(function(request,reponse){
//	reponse.writeHead(200,{"Content-Type":"text/plain;charset=utf8"});
//	reponse.write("操作系统默认临时文件夹:"+os.tmpdir());
//	reponse.write("\n");
//	reponse.write("CPU字节序:"+os.endianness());
//	reponse.write("\n");
//	reponse.write("操作系统主机名:"+os.hostname());
//	reponse.write("\n");
//	reponse.write("操作系统名:"+os.type());
//	reponse.write("\n");
//	reponse.write("操作系统名:"+os.platform());
//	reponse.write("\n");
//	reponse.write("操作系统CPU架构:"+os.arch());
//	reponse.write("\n");
//	reponse.write("操作系统发行版本:"+os.release());
//	reponse.write("\n");
//	reponse.write("操作系统运行时间:"+os.uptime());
//	reponse.write("\n");
//	reponse.write("包含1、5、15分钟平均负载的数组:"+os.loadavg());
//	reponse.write("\n");
//	reponse.write("操作系统内存总量:"+os.totalmem());
//	reponse.write("\n");
//	reponse.write("操作系统空闲内存总量:"+os.freemem());
//	reponse.write("\n");
//	reponse.write("所安装CPU/内核信息:"+util.inspect(os.cpus()));
//	reponse.write("\n");
//	reponse.write("网络接口列表:"+util.inspect(os.networkInterfaces()));
//	reponse.write("\n");
//	reponse.write("操作系统行尾符常量:"+os.EOL);
//	reponse.end()
//}).listen(3000,function(){
//	console.log("运行正常,顺利结束");
//})


//path模块
//path.normalize(p)规范化路径,注意'..' 和 '.'
//path.join([path1][, path2][, ...])用于连接路径该方法的主要用途在于,会正确使用当前系统的路径分隔符,Unix系统是"/",Windows系统是"\"
//path.resolve([from ...], to)将 to 参数解析为绝对路径
//path.isAbsolute(path)判断参数 path 是否是绝对路径
//path.relative(from, to)用于将相对路径转为绝对路径
//path.dirname(p)返回路径中代表文件夹的部分,同 Unix 的dirname 命令类似
//path.basename(p[, ext])返回路径中的最后一部分同 Unix 命令 bashname 类似
//path.extname(p)返回路径中文件的后缀名,即路径中最后一个'.'之后的部分如果一个路径中并不包含'.'或该路径只包含一个'.' 且这个'.'为路径的第一个字符,则此命令返回空字符串
//path.parse(pathString)返回路径字符串的对象
//path.format(pathObject)从对象中返回路径字符串,和 path.parse 相反

//属性

//path.sep平台的文件路径分隔符,'\\' 或 '/'
//path.delimiter平台的分隔符, ; or ':'.
//path.posix提供上述 path 的方法,不过总是以 posix 兼容的方式交互
//path.win32提供上述 path 的方法,不过总是以 win32 兼容的方式交互


var path=require("path");
var util=require("util");
console.log('normalization:'+path.normalize('/nodejs/node1/node1/..'));//输出\nodejs\node1   格式化路径
console.log('normalization:'+path.normalize('/nodejs/node1/..'));//输出\nodejs     格式化路径
console.log('join path:'+path.join('node1','node2','node3/node3','node4','..'));//输出 \node1\node2\node3\node3\      连接路径
console.log('resolve:'+path.resolve('toolsModule.txt'));//输出 F:\nodejs\toolsModule.txt    输出文件的绝对路径
console.log('relative:'+util.inspect(path.relative('/nodejs/node1','node2/node2')));
console.log('dirname:'+path.dirname('/nodejs/node2/node2'));//输出路径所在文件夹名称
console.log('basename:'+path.basename('/nodejs/toolsModule1.txt'));
console.log('ext name:'+path.extname('toolsModule1.txt'));//输出.txt    路径中文件的后缀名
console.log('parse:'+util.inspect(path.parse('/nodejs/toolsModule1.txt')));
//console.log('format:'+util.inspect(path.format('/nodejs')));//效果未实现
console.log('\\nodejs\\node1'.split(path.sep));//window下使用\分隔测试不生效,\\测试生效
console.log(process.env.PATH);
process.env.PATH.split(path.delimiter);
process.env.PATH.split(path.delimiter);
  
//request.app当callback为外部文件时,用requestuest.app访问express的实例
//request.baseUrl获取路由当前安装的URL路径
//requestt.body / request.cookies获得「请求主体」/ Cookies
//request.freponseh / request.stale判断请求是否还「新鲜」
//request.hostname / request.ip获取主机名和IP地址
//request.originalUrl获取原始请求URL
//request.params获取路由的parameters
//request.path获取请求路径
//request.protocol获取协议类型
//request.query获取URL的查询参数串
//request.route获取当前匹配的路由
//request.subdomains获取子域名
//request.accepts()检查可接受的请求的文档类型
//request.acceptsCharsets/request.acceptsEncodings/request.acceptsLanguages:返回指定字符集的第一个可接受字符编码
//request.get()获取指定的HTTP请求头
//request.is()判断请求头Content-Type的MIME类型
//reponse.app同request.app一样
//reponse.append()追加指定HTTP头
//reponse.set()在reponse.append()后将重置之前设置的头
//reponse.cookie(name,value [,option]):设置Cookie,opition:domain/expireponse/httpOnly/maxAge/path/secure/signed
//reponse.clearCookie()清除Cookie
//reponse.download()传送指定路径的文件
//reponse.get()返回指定的HTTP头
//reponse.json()传送JSON响应
//reponse.jsonp()传送JSONP响应
//reponse.location()只设置响应的Location HTTP头，不设置状态码或者close reponseponse
//reponse.redirect()设置响应的Location HTTP头，并且设置状态码302
//reponse.send()传送HTTP响应
//reponse.sendFile(path [，options] [，fn])：传送指定路径的文件 -会自动根据文件extension设定Content-Type
//reponse.set()设置HTTP头，传入object可以一次设置多个头
//reponse.status()：设置HTTP状态码
//reponse.type()：设置Content-Type的MIME类型

//+" "+ +" "+ +" "+ +" "+ +" "+ +" "+ +" "+ +" "+ +" "+ +" "++" "++" "++" "++" "++" "++" "++" "++" "++" "++" "+
//var express=require("express");
//var util=require("util");
//var app=express();
////console.log(app);
//app.get('/',function(request,reponse){
//	reponse.send("主页get请求");
////	console.log(request.baseUrl+" "+request.hostname+" "+request.ip+" "+request.originalUrl+" "+request.params+" "+request.path+" "+request.protocol+" "+request.query+" "+request.route+" "+request.subdomains+" "+request.accepts()+" "+request.acceptsCharsets+" "+request.acceptsEncodings+" "+request.acceptsLanguages+" "+request.get("/")+" "+request.is());
//}).post("/process_get",function(request,reponse){//效果无直接体现
//	reponse.send("主页post请求");
//}).get("/del_user",function(request,reponse){
//	reponse.send("删除-GET");
//}).get("/ab*ef",function(request,reponse){//可为abqqef等
//	reponse.send("正则-GET");
//})
//var server=app.listen(3010,function(){
//	var host=server.address().address;
//	var port=server.address().port;
//	console.log(server.address());
//	console.log("应用实例,访问地址为http://%s:%s",host,port);
//});



//var express=require("express");
//var app=express();
//app.use(express.static('node4/node4'));//可用于访问其下文件
//app.get("/",function(request,reponse){
//	reponse.send("Hello");
//})
//var server=app.listen(3000,function(){
//	var port=server.address().port;//访问端口
//	var host=server.address().address;//访问地址
//	console.log("访问地址为http://%s:%s",123,port);//输出为:访问地址为http://123:3000
//	console.log("访问地址为http://%s:%s",host,port);//输出为:访问地址为http://:::3000
//})


//get

//var express=require("express");
//var app=express();
//app.use(express.static("node4/node4"));
//app.get("/",function(request,response){
//	response.sendFile(__dirname+"/"+"p.html");//不明白其存在含义
//})
//app.get("/process_get",function(request,response){
//	var reponse={
//		first_name:request.query.first_name,
//		last_name:request.query.last_name
//	}
//	response.end(JSON.stringify(reponse));//JSON.stringify()从一个对象中解析出字符串,区别于JSON.parse()从字符串中解析出json对象
////	response.send(reponse);
//})
//var server=app.listen(3010,function(){
//	var port=server.address().port;
//	var host=server.address().address;
//	console.log("测试"+"http://%s:%s",host,port);
//	console.log(__dirname+"/"+"express.html");//f:\nodejs\express.html
//})


//post


//var express=require("express");
//var app=express();
//var bodyParser=require("body-parser");
//var urlencodedParser=bodyParser.urlencoded({extended:false});//创建application/x-www-form-urlencoded编码解析
//app.use(express.static("node4/node4"));
//app.get('/',function(request,response){
//	response.sendFile(__dirname+"/"+"express.html");	
//})
//app.post("/process_post",urlencodedParser,function(request,response){//此处斜杠应注意,不要掉了
//	var reponse={
//		first_name:request.body.first_name,
//		last_name:request.body.last_name
//	}
//	console.log(request)
//	response.end(JSON.stringify(reponse));
//})
//var server=app.listen(3010,function(){
//	var host=server.address().address;
//	var port=server.address().port;
//	console.log("访问地址为:http://%s:%s",host,port);
//})


//上传
//app.use 加载用于处理http請求的middleware(中间件),当一个请求来的时候,会依次被这些 middlewares处理
//var express=require("express");
//var app=express();
//var fs=require("fs");
////var bodyParser=require("body-parser");//用于处理JSON,Raw,Text和URL编码的数据
//var multer=require("multer");//用于处理 enctype="multipart/form-data"(设置表单的MIME编码)的表单数据
//app.use(express.static("node4/node4"));//可用于访问其下文件
////app.use(bodyParser.urlencoded({extended:false}));
////app.use(multer({dest:"upload/"}).array('img',4));
//app.use(multer({dest:"upload/"}).array('img',4));
//app.get("/",function(request,response){
//	response.sendFile(__dirname+"/"+"express.html");
//})
//app.post("/file_upload",function(request,response){
//	console.log(request.files[0]);
//	var des_file=__dirname+"/upload/"+request.files[0].originalname;
//	fs.readFile(request.files[0].path,function(err,data){
//		fs.writeFile(des_file,data,function(err){
////			console.log(des_file+" "+data);
//			if(err){
//				return console.log(err);
//			}else{
//				reponse={
//					message:"File uploaded successfully",
//					filename:request.files[0].originalname
//				}
//			}
//			console.log(request);
//			response.end(JSON.stringify(reponse));
//		})
//	})
//})
//var server=app.listen(3010,function(){
//	var host=server.address().address;
//	var port=server.address().port;
//	console.log("访问地址为:http://%s:%s",host,port);
//})


var express=require("express");
var app=express();
var fs=require("fs");
//var bodyParser=require("body-parser");//用于处理JSON,Raw,Text和URL编码的数据
var multer=require("multer");//用于处理 enctype="multipart/form-data"(设置表单的MIME编码)的表单数据
app.use(express.static("node4/node4"));//可用于访问其下文件
app.use(multer({dest:"bmp/"}).array('img',4));
app.get("/",function(request,response){
	response.sendFile(__dirname+"/"+"express.html");
})
app.post("/file_upload",function(request,response){
	console.log(request.files.length);
	if(request.files.length>0){
		var reponse=[];
		request.files.forEach(function(item,index){
			var des_file=__dirname+"/upload/"+request.files[index].originalname;
			fs.readFile(request.files[index].path,function(err,data){
				fs.writeFile(des_file,data,function(err){
					if(err){
						return console.log(err);
					}else{
						reponse[index]={
							message:"File uploaded successfully",
							filename:request.files[index].originalname
						}
						fs.unlink("bmp/"+request.files[index].filename,function(){
							console.log("删除成功");
						})
//						response.send("上传结束");
						response.end("upload end");
					}
				})
			})
		})
	}else{
//		response.send("无文件上传");
		response.end("no file");
	}
	
	
})
var server=app.listen(3000,function(){
	var host=server.address().address;
	var port=server.address().port;
	console.log("访问地址为:http://%s:%s",host,port);
})


//cookie管理


//var express=require("express");
//var cookieParser=require("cookie-parser");
//var app=express();
//app.use(cookieParser());
//app.get("/",function(request,response){
//	response.send("Cookie:"+JSON.stringify(request.cookies));
//})
//app.listen(3010,function(){
//	console.log("cookie测试")
//})

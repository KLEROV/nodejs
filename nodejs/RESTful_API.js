var express = require("express");
var app = express();
var fs = require("fs");
var user = {
	"user5": {
		"name": "mohit",
		"password": "password4",
		"profession": "teacher",
		"id": 5
	}
}
app.get("/", function(request, response) {
	fs.readFile(__dirname + '/' + 'json.json', 'utf8', function(err, data) {
		if(err) {
			return console.log(err);
		}
		data["user5"]=user["user5"];
//		response.send("完成");
//		response.send(data);//其中中文部分正常
//		response.end(JSON.stringify(data));//其中中文部分为乱码
		response.end(data);
	})
})
//app.get("/:id", function(request, response) {//输入链接为localhost:3010/id显示对应id的数据,输出数据对应数据详情
//	fs.readFile(__dirname + '/' + 'json.json', 'utf8', function(err, data) {
//		if(err) {
//			return console.log(err);
//		}
//		data=JSON.parse(data);//解析json数据
//		var userId=data["user"+request.params.id];
////		var userId=data.user1;
//		response.send(userId);
//	})
//})
app.get("/:id", function(request, response) {//输入链接为localhost:3010/id显示对应id的数据,输出数据对应数据详情
	fs.readFile(__dirname + '/' + 'json.json', 'utf8', function(err, data) {
		if(err) {
			return console.log(err);
		}
		data=JSON.parse(data);//解析json数据
		delete data["user"+request.params.id];//删除数据,文件中对应数据未删除
//		var userId=data.user1;
		response.send(data);
	})
})
var server = app.listen(3010, function() {
	console.log("测试");
})
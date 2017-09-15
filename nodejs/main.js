//异步执行
var fs = require("fs");
console.log(data); //执行顺序1
var data = fs.readFile("p.html", function(err, data) {
		err ? console.log(err) : console.log(data.toString());
	}) //执行顺序3
console.log(data); //执行顺序2
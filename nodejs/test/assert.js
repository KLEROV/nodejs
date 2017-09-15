//断言
//assert(value[, message])
var http=require("http");
var assert=require("assert");
assert(true);//正常
assert(1);//正常
assert("电饭锅好地方");//正常
assert({"name":"aa"});//正常
assert(["name","aa"]);//正常
assert(new Object());//正常
//assert(0);//报错,抛出 "AssertionError: 0 == true"
//assert(0,"这是假");//报错,抛出 "AssertionError: 这是假"
//assert(false,"这是假");//报错,抛出 "AssertionError: 这是假"


//assert.deepEqual(actual,expected[,message]);测试 actual和 expected参数是否深度相等,比较可枚举的自身属性,不测试对象的原型、连接符、或不可枚举的属性,表现形式相同则相等,Error对象的属性不可枚举,不会抛出AssertionError.
//assert.deepStrictEqual(actual, expected[, message]);大多数情况下等同于assert.deepEqual(),比较时原始值使用严格相等运算符（===）进行比较,对象对比包括严格比较它们的原型
//assert.equal(actual,expected[,message]);使用相等运算符(==)测试,actual和expected是否相等
//assert.strictEqual(actual, expected[, message]);使用严格相等运算符（===）测试是否严格相等
//assert.notDeepEqual(actual,expected[,message]);测试 actual 和 expected 参数是否不深度相等
//assert.notDeepStrictEqual(actual, expected[, message]);测试 actual 和 expected 参数是否不深度严格相等
//assert.notEqual(actual, expected[, message]);使用不等运算符（!=）来测试 actual 和 expected 参数是否不相等
//assert.notStrictEqual(actual, expected[, message]);使用严格不等运算符（!==）来测试 actual 和 expected 参数是否不严格相等


var obj1 = {
  a : {
    b : 1
  }
};
var obj2 = {
  a : {
    b : 2
  }
};
var obj3 = {
  a : {
    b : "1"
  }
};
var obj4 = {
  a : {
    b : "1"
  }
};
var obj5 = Object.create(obj1);
var obj6 = Object.create(obj1);
var obj7 = obj1;
var obj8={ "name" : { "name" : 1 }};
console.log("obj5:",obj5);//输出为{}
assert.deepEqual(obj1, obj1);
assert.deepEqual({"name": 1}, {"name": "1"});
assert.deepEqual(obj8, {"name":{"name": 1}});
//assert.deepEqual(obj1, obj2);//报错,抛出AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }
assert.deepEqual(obj1, obj3);
assert.deepEqual(obj3, obj4);
//assert.deepEqual(obj1, obj5);//抛出AssertionError: { a: { b: 1 } } deepEqual {}
assert.deepEqual(obj5, obj6);
assert.deepEqual(obj1, obj7);
//assert.deepEqual(obj2, obj7);//报错,抛出AssertionError: { a: { b: 2 } } deepEqual { a: { b: 1 } }
assert.deepEqual(obj3, obj7);
assert.deepEqual(Error('a'), Error('b'));
assert.deepEqual([], new Array());
assert.deepEqual({}, obj5);
//assert.deepEqual([], [1],"deepEqual测试");//抛出AssertionError: deepEqual测试


assert.deepStrictEqual(obj1, obj1);
//assert.deepStrictEqual({"name": 1}, {"name": "1"});//抛出AssertionError: { name: 1 } deepStrictEqual { name: '1' }
assert.deepStrictEqual(obj8, {"name":{"name": 1}});
//assert.deepStrictEqual(obj1, obj2);//报错,抛出AssertionError: { a: { b: 1 } } deepStrictEqual { a: { b: 2 } }
//assert.deepStrictEqual(obj1, obj3);//抛出AssertionError: { a: { b: 1 } } deepStrictEqual { a: { b: '1' } }
assert.deepStrictEqual(obj3, obj4);
//assert.deepStrictEqual(obj1, obj5);//抛出AssertionError: { a: { b: 1 } } deepStrictEqual {}
assert.deepStrictEqual(obj5, obj6);
assert.deepStrictEqual(obj1, obj7);
//assert.deepStrictEqual(obj2, obj7);//报错,抛出AssertionError: { a: { b: 2 } } deepStrictEqual { a: { b: 1 } }
//assert.deepStrictEqual(obj3, obj7);//抛出AssertionError: { a: { b: '1' } } deepStrictEqual { a: { b: 1 } }
assert.deepStrictEqual(Error('a'), Error('b'));
assert.deepStrictEqual(Error('a'), Error('a'));
assert.deepStrictEqual([], new Array());
//assert.deepStrictEqual({}, obj5);//抛出AssertionError: {} deepStrictEqual {}
//assert.deepStrictEqual([], [1],"deepStrictEqual测试");//抛出AssertionError: deepStrictEqual测试


assert.equal(obj1, obj1);
assert.equal(1, "1");
assert.equal("tttt", "tttt");
//assert.equal({"name": 1}, {"name": "1"});//抛出AssertionError: { name: 1 } == { name: '1' }
//assert.equal(obj8, {"name":{"name": 1}});//抛出AssertionError: { name: 1 } == { name: '1' }
//assert.equal(obj1, obj2);//报错,抛出AssertionError: { a: { b: 1 } } equal { a: { b: 2 } }
//assert.equal(obj1, obj3);//报错,抛出AssertionError: { a: { b: 1 } } equal { a: { b: "1" } }
//assert.equal(obj3, obj4);//报错,抛出AssertionError: { a: { b: "1" } } equal { a: { b: "1" } }
//assert.equal(obj1, obj5);//抛出AssertionError: { a: { b: 1 } } equal {}
//assert.equal(obj5, obj6);//抛出AssertionError: {} equal {}
assert.equal(obj1, obj7);
//assert.equal(obj2, obj7);//报错,抛出AssertionError: { a: { b: 2 } } equal { a: { b: 1 } }
//assert.equal(obj3, obj7);//抛出AssertionError: { a: { b: "1" } } equal { a: { b: "1" } }
//assert.equal(Error('a'), Error('a'));//抛出AssertionError: Error: a
//assert.equal(Error('a'), Error('b'));//抛出AssertionError: Error: a
//assert.equal([], new Array());//抛出AssertionError: [] == []
//assert.equal({}, obj5);//抛出AssertionError: {} == {}
//assert.equal([], [1],"equal测试");//抛出AssertionError: equal测试
//assert.equal([], [],"equal测试");//抛出AssertionError: equal测试


assert.strictEqual(obj1, obj1);
//assert.strictEqual({"name": 1}, {"name": "1"});//抛出AssertionError: { name: 1 } === { name: '1' }
//assert.strictEqual(obj8, {"name":{"name": 1}});//抛出AssertionError: { name: { name: 1 } } === { name: { name: 1 } }
//assert.strictEqual(obj1, obj2);//抛出AssertionError: { a: { b: 1 } } === { a: { b: 2 } }
//assert.strictEqual(obj1, obj3);//抛出AssertionError: { a: { b: 1 } } === { a: { b: '1' } }
//assert.strictEqual(obj3, obj4);//抛出AssertionError: { a: { b: '1' } } === { a: { b: '1' } }
//assert.strictEqual(obj1, obj5);//抛出AssertionError: { a: { b: 1 } } === {}
//assert.strictEqual(obj5, obj6);//抛出AssertionError: {} === {}
assert.strictEqual(obj1, obj7);
//assert.strictEqual(obj2, obj7);//抛出AssertionError: { a: { b: 2 } } === { a: { b: 1 } }
//assert.strictEqual(obj3, obj7);//抛出AssertionError: { a: { b: '1' } } === { a: { b: 1 } }
//assert.strictEqual(Error('a'), Error('b'));//抛出AssertionError: Error: a
//assert.strictEqual(Error('a'), Error('a'));//抛出AssertionError: Error: a
//assert.strictEqual([], new Array());//抛出AssertionError: [] === []
//assert.strictEqual({}, obj5);//抛出AssertionError: {} === {}
//assert.strictEqual([], [1],"strictEqual测试");//抛出AssertionError: strictEqual测试


//assert.notDeepEqual(obj1, obj1);//抛出AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }
//assert.notDeepEqual({"name": 1}, {"name": "1"});//抛出AssertionError: { name: 1 } notDeepEqual { name: '1' }
//assert.notDeepEqual(obj8, {"name":{"name": 1}});//抛出AssertionError: { name: { name: 1 } } notDeepEqual { name: { name: 1 } }
assert.notDeepEqual(obj1, obj2);
//assert.notDeepEqual(obj1, obj3);//抛出AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: '1' } }
//assert.notDeepEqual(obj3, obj4);//抛出AssertionError: { a: { b: '1' } } notDeepEqual { a: { b: '1' } }
assert.notDeepEqual(obj1, obj5);
//assert.notDeepEqual(obj5, obj6);//抛出AssertionError: {} notDeepEqual {}
//assert.notDeepEqual(obj1, obj7,"notDeepEqual测试");//抛出AssertionError: notDeepEqual测试
assert.notDeepEqual(obj2, obj7);
//assert.notDeepEqual(obj3, obj7);//抛出AssertionError: { a: { b: '1' } } notDeepEqual { a: { b: 1 } }
//assert.notDeepEqual(Error('a'), Error('b'));//抛出AssertionError: Error: a
//assert.notDeepEqual([], new Array());//抛出AssertionError: [] notDeepEqual []
//assert.notDeepEqual({}, obj5);//抛出AssertionError: {} notDeepEqual {}
assert.notDeepEqual([], [1]);


//assert.notDeepStrictEqual(obj1, obj1);//抛出AssertionError: { a: { b: 1 } } notDeepStrictEqual { a: { b: 1 } }
assert.notDeepStrictEqual({"name": 1}, {"name": "1"});
//assert.notDeepStrictEqual(obj8, {"name":{"name": 1}});//抛出AssertionError: { name: { name: 1 } } notDeepStrictEqual { name: { name: 1 } }
assert.notDeepStrictEqual(obj1, obj2);
assert.notDeepStrictEqual(obj1, obj3);
//assert.notDeepStrictEqual(obj3, obj4);//抛出AssertionError: { a: { b: '1' } } notDeepStrictEqual { a: { b: '1' } }
assert.notDeepStrictEqual(obj1, obj5);
//assert.notDeepStrictEqual(obj5, obj6);//抛出AssertionError: {} notDeepStrictEqual {}
//assert.notDeepStrictEqual(obj1, obj7);//抛出AssertionError: { a: { b: 1 } } notDeepStrictEqual { a: { b: 1 } }
assert.notDeepStrictEqual(obj2, obj7);
assert.notDeepStrictEqual(obj3, obj7);
//assert.notDeepStrictEqual(Error('a'), Error('b'));//抛出AssertionError: Error: a
//assert.notDeepStrictEqual(Error('a'), Error('a'));//抛出AssertionError: Error: a
//assert.notDeepStrictEqual([], new Array());//抛出AssertionError: [] notDeepStrictEqual []
assert.notDeepStrictEqual({}, obj5);
assert.notDeepStrictEqual([], [1],"notDeepStrictEqual测试");


//assert.notEqual(obj1, obj1);//抛出AssertionError: { a: { b: 1 } } != { a: { b: 1 } }
//assert.notEqual(1, "1");//抛出AssertionError: { a: { b: 1 } } != { a: { b: 1 } }
//assert.notEqual("tttt", "tttt");//抛出AssertionError: 'tttt' != 'tttt'
assert.notEqual({"name": 1}, {"name": "1"});
assert.notEqual(obj8, {"name":{"name": 1}});
assert.notEqual(obj1, obj2);
assert.notEqual(obj1, obj3);
assert.notEqual(obj3, obj4);
assert.notEqual(obj1, obj5);
assert.notEqual(obj5, obj6);
//assert.notEqual(obj1, obj7);//抛出AssertionError: { a: { b: 1 } } != { a: { b: 1 } }
assert.notEqual(obj2, obj7);
assert.notEqual(obj3, obj7);
assert.notEqual(Error('a'), Error('a'));
assert.notEqual(Error('a'), Error('b'));
assert.notEqual([], new Array());
assert.notEqual({}, obj5);
assert.notEqual([], [1],"notEqual测试");
assert.notEqual([], [],"notEqual测试");


//assert.notStrictEqual(obj1, obj1);//抛出AssertionError: { a: { b: 1 } } !== { a: { b: 1 } }
assert.notStrictEqual({"name": 1}, {"name": "1"});
assert.notStrictEqual(obj8, {"name":{"name": 1}});
assert.notStrictEqual(obj1, obj2);
assert.notStrictEqual(obj1, obj3);
assert.notStrictEqual(obj3, obj4);
assert.notStrictEqual(obj1, obj5);
assert.notStrictEqual(obj5, obj6);
//assert.notStrictEqual(obj1, obj7);//抛出AssertionError: { a: { b: 1 } } !== { a: { b: 1 } }
assert.notStrictEqual(obj2, obj7);
assert.notStrictEqual(obj3, obj7);
assert.notStrictEqual(Error('a'), Error('b'));
assert.notStrictEqual(Error('a'), Error('a'));
assert.notStrictEqual([], new Array());
assert.notStrictEqual({}, obj5);
assert.notStrictEqual([], [1],"notStrictEqual测试");


//assert.doesNotThrow(block[,error][,message]);断言block函数不会抛出错误;调用assert.doesNotThrow时,立刻调用block函数,若block函数抛出错误,并且错误类型与 error 参数指定的相同,则抛出 AssertionError.如果错误类型不相同,或 error参数是 undefined,则错误回传给调用者

//assert.doesNotThrow(//断言中无匹配的错误类型,抛出TypeError: wrong value
//	()=>{
//		throw new TypeError('wrong value');
//		},SyntaxError,"SyntaxError(语法错误)"
//	)

//assert.doesNotThrow(//抛出AssertionError: Got unwanted exception (TypeError).这是一个测试
//	()=>{
//		throw new TypeError('wrong value');//TypeError: wrong value
//		},TypeError,"这是一个测试"
//	)

//assert.doesNotThrow(//抛出ReferenceError: rrrError is not defined;ReferenceError(引用错误) 对象表明一个不存在的变量被引用
//	()=>{
//		throw new TypeError('wrong value');//TypeError: wrong value
//		},rrrError,"这是一个测试"
//	)

//assert.fail(actual,expected,message,operator);抛出AssertionError,message值不为真,错误信息为actual和expected的值，并以operator分隔，否则错误信息为message

//assert.fail(1,2,undefined,">");//抛出AssertionError: 1 > 2
//assert.fail(1,2,"test",">");//抛出AssertionError: test
//assert.fail(1,2,false,">");//抛出AssertionError: 1 > 2
//assert.fail(1,2,true,">");//抛出AssertionError: true
//assert.fail(1,2,"whoops",">");//抛出AssertionError: whoops
//assert.fail(1,1,undefined,">");//抛出AssertionError: 1 > 1
//assert.fail(1,1,"test",">");//抛出AssertionError: test
//assert.fail(1,1,false,">");//抛出AssertionError: 1 > 1
//assert.fail(1,1,true,">");//抛出AssertionError: true
//assert.fail(1,1,0,">");//抛出AssertionError: 1 > 1

//assert.ifError(value);value的值为真,抛出 value.当测试回调函数的error参数时非常有用

assert.ifError(0);
//assert.ifError(-1);//抛出-1
//assert.ifError(true);//抛出true
//assert.ifError({});//抛出[Object Object]
//assert.ifError({"name":"rt"});//抛出[Object Object]
//assert.ifError("name");//抛出name
//assert.ifError([3,5]);//抛出3,5
//assert.ifError(new Array());//
//assert.ifError(1);//抛出1
//assert.ifError("error");//抛出error
//assert.ifError(new Error());//抛出Error
//assert.ifError(Error);//抛出function Error() { [native code] }
//assert.ifError(Error());//抛出Error


//assert.ok(value[,message]);测试 value是否为真值,相当于 assert.equal(!!value, true, message);value不为真值,则抛出一个带有 message属性的AssertionError,其中message属性的值等于传入的message参数的值.如果 message参数为 undefined,则输出默认的错误信息


//assert.ok(0);//抛出AssertionError: 0 == true
//assert.ok(0,"assert.ok测试");//抛出AssertionError: assert.ok测试
assert.ok(-1);
assert.ok(true);
assert.ok({});
assert.ok({"name":"rt"});
assert.ok("name");
assert.ok([]);
assert.ok([3,5]);
assert.ok(new Array());
assert.ok(1);
assert.ok("error");
assert.ok(new Error());


//assert.throws(block[,error][,message]);期望block函数抛出错误.若指定error(error参数不能是字符串,如果第二个参数是字符串,则视为不传error参数,传入的字符串会被当作是 message的值),它可以是一个构造函数、正则表达式、或校验函数.若指定message,当block函数抛出错误时,message会作为错误信息传给 AssertionError


assert.throws(()=>{
	throw new Error("wrong value");
},Error);
//assert.throws(()=>{//抛出ReferenceError: Wrong is not defined
//	throw new Error("wrong value");
//},Wrong);
assert.throws(()=>{
	throw new Error("wrong value");
	},
	/value/
);
//assert.throws(()=>{//抛出Error: wrong value
//		throw new Error("wrong value");
//	},
//	/ert/
//);
assert.throws(()=>{
		throw new Error("wrong value");
	},
	/wrong/
);

assert.throws(()=>{
		throw new Error("wrong value");
	},function(err){
		if(err instanceof Error && /value/.test(err)){
			return true;
		}
	},"unexpected error"
)

//assert.throws(()=>{//抛出Error: wrong val
//		throw new Error("wrong val");
//	},function(err){
//		if(err instanceof Error && /value/.test(err)){
//			return true;
//		}
//	},"unexpected error"
//)

http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/plain;charset=utf8"});
	response.write("这是一个回归测试");
	response.end();
}).listen(3000,function(){
	console.log(122);
})

//var crypto;
//try{//判断设备是否支持crypto
//	crypto=require('crypto');
//	console.log("crypto support is abled")
//}catch(err){
//	console.log('crypto support is disabled');
//}

//var crypto=require("crypto");
//var secret="12345";
//var hash=crypto.createHmac("sha256",secret)//创建一个Hash实例,算法可以为md5、sha1、sha256、sha512、ripemd160,
//	.update("123").digest('hex');//更新hash的内容为指定的data.当使用流数据时可能会多次调用该方法
//console.log(hash);


//var crypto=require("crypto");
//var fs=require("fs");
//var pem=fs.readFileSync('server.pem')
//var key=pem.toString("ascii");
//var hmac=crypto.createHmac('sha1',key).
//	update("foo").
//	digest("hex");
//console.log(hmac);

//crypto.createCipher(algorithm, password);
//crypto.createCipheriv(algorithm, key, iv);
//cipher.update(data, [input_encoding], [output_encoding])
//algorithm表示用何种加密算法,可以利用openssl list-cipher-algorithms命令来查看你的系统支持哪些加密算法.password和key,iv表示密钥,即利用何种密钥加密,password是用来派生key和iv的,key的话是算法原生的key,iv表示初始化向量

//var crypto=require("crypto");
//var fs=require("fs");
//var pem=fs.readFileSync("server.js");
//var key=pem.toString("ascii");
//var cipher=crypto.createCipher('blowfish',key);
//cipher.update(new Buffer(4),'binary','hex');
//cipher.update(new Buffer(4),'binary','hex');
//cipher.update(new Buffer(4),'binary','hex');
//var show=cipher.final('hex');
//console.log(show);

////加密过程
//var crypto = require("crypto");
//var cipher=crypto.createCipher('aes-256-cbc','InmbuvP6Z8');
////var text="123|123467845156";
//var text="123|123123123123123";
//var crypted=cipher.update(text,'utf8','hex');
//crypted += cipher.final('hex');
////解密过程
//var decipher=crypto.createDecipher('aes-256-cbc','InmbuvP6Z8');
//var dec=decipher.update(crypted,'hex','utf8');
//dec += decipher.final('utf8');
//console.log(crypted);
//console.log(dec);

////加密
//var crypto=require('crypto');
//var fs=require("fs");
//var pem=fs.readFileSync("server.pem");
//var key=pem.toString("ascii");
//var plaintext=new Buffer("skdngvjodsifmvosdfdfs455");
//var encrypted="";
//var cipher=crypto.createCipher("blowfish",key);
//encrypted+=cipher.update(plaintext,'binary','hex');
//encrypted+=cipher.final('hex');
////解密
//var decrypted="";
//var decipher=crypto.createDecipher('blowfish',key);
//decrypted+=decipher.update(encrypted,'hex',"binary");
//decrypted+=decipher.final('binary');
//var output=new Buffer(decrypted);
//console.log(encrypted);
//console.log(decrypted);
//console.log(new Buffer(encrypted));
//console.log(output);


//var cert=require("crypto").Certificate();//此段测试无效果体现
////function getSpkacSomehow(){
////	var buf=new Buffer(123);
////}
////var spkac=getSpkacSomehow();
//var spkac=new Buffer("wlefmnowfgmwo");
//var challenge=cert.exportChallenge(spkac);
//console.log(challenge.toString('utf8'));


//var crypto=require("crypto");
//var message=Buffer.from('some clear text data');
//console.log(message.toString("hex"));
//var cipher=crypto.createCipher('aes192','a password');
//var encrypted='';
//cipher.on("readable",(date)=>{
//	var data=cipher.read();
//	if(data){
//		encrypted+=data.toString("hex");
//	}
//})
//cipher.on("end",()=>{
//	console.log(encrypted);//加密结果
//	var decrypted="";
//	var decipher=crypto.createDecipher('aes192','a password');
//	decrypted+=decipher.update(encrypted,'hex',"binary");
//	decrypted+=decipher.final('binary');
//	console.log(decrypted);//解密结果
//})
//cipher.write(message);
//cipher.end();


////功能不详，不明白其意义
//var crypto=require("crypto");
//var fs=require("fs");
//var cipher=crypto.createCipher('aes192','a password');
//var input=fs.createReadStream('main.js');
//var output=fs.createWriteStream('test.enc');
//var show=input.pipe(cipher,'utf8').pipe(output,'utf8');
//console.log(show);

//var crypto=require("crypto");
//var cipher=crypto.createCipher('aes192','a password');
//var encrypted=""
//encrypted+=cipher.update('some clear text data','utf8','hex');
//encrypted+=cipher.final('hex');
//
//console.log(encrypted);
//var decipher=crypto.createDecipher('aes192','a password');
//var decrypted='';
//decrypted=decipher.update(encrypted,'hex','utf8');
//decrypted+=decipher.final('utf8');
//console.log(decrypted);

//无明显效果,功能待测试,属于加密部分内容
//var crypto=require("crypto");
//var assert=require("assert");
//var alice=crypto.createDiffieHellman(2048);
//var alice_key=alice.generatakeys();
//var bob=crypto.createDiffieHellman(alice.getPrime(),alice.getGenerator());
//var bob_key=bob.generatekeys();
//var alice_secret=alice.computeSecret(bob_key);
//var bob_secret=bob.computeSecret(alice_key);
//console.log(alice);


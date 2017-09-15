//dns.lookup(hostname[,options],callback);将域名(比如 'runoob.com')解析为第一条找到的记录 A(IPV4)或 AAAA(IPV6).参数 options可以是一个对象或整数.如果没有提供 options,IP v4和v6 地址都可以.如果 options是整数,则必须是 4或 6
//dns.lookupService(address,port,callback);使用getnameinfo 解析传入的地址和端口为域名和服务.
//dns.resolve(hostname[,rrtype],callback);将一个域名(如 'runoob.com')解析为一个rrtype指定记录类型的数组,rrtypes为字符串,有效的rrtypes值为'A'(IPV4 地址,默认),'AAAA'(IPV6 地址),'MX'(邮件交换记录),'TXT'(text 记录),'SRV'(SRV 记录),'PTR'(用来反向 IP查找),'NS'(域名服务器 记录),'CNAME'(别名 记录),'SOA'(授权记录的初始值).
//dns.resolve4(hostname, callback);和 dns.resolve()类似,仅能查询 IPv4(A 记录).addresses IPv4 地址数组 (比如,['74.125.79.104', '74.125.79.105', '74.125.79.106']).
//dns.resolve6(hostname, callback);和 dns.resolve4() 类似, 仅能查询 IPv6( AAAA 查询)
//dns.resolveMx(hostname, callback);和 dns.resolve() 类似, 仅能查询邮件交换(MX 记录).
//dns.resolveTxt(hostname, callback);和 dns.resolve() 类似, 仅能进行文本查询 (TXT 记录). addresses 是 2-d 文本记录数组.(比如,[ ['v=spf1 ip4:0.0.0.0 ', '~all' ] ]). 每个子数组包含一条记录的 TXT 块.根据使用情况可以连接在一起,也可单独使用.
//dns.resolveSrv(hostname, callback);和 dns.resolve() 类似, 仅能进行服务记录查询 (SRV 记录). addresses 是 hostname可用的 SRV 记录数组. SRV 记录属性有优先级(priority),权重(weight), 端口(port), 和名字(name) (比如,[{'priority': 10, 'weight': 5, 'port': 21223, 'name': 'service.example.com'}, ...]).
//dns.resolveSoa(hostname,callback);和 dns.resolve() 类似, 仅能查询权威记录(SOA 记录).
//dns.resolveNs(hostname,callback);和dns.resolve()类似,仅能进行域名服务器记录查询(NS记录).addresses是域名服务器记录数组(hostname可以使用) (比如,['ns1.example.com','ns2.example.com'])
//dns.resolveCname(hostname,callback);和dns.resolve()类似, 仅能进行别名记录查询 (CNAME记录).addresses 是对hostname可用的别名记录数组 (比如,,['bar.example.com']).
//dns.reverse(ip, callback);反向解析 IP 地址,指向该 IP 地址的域名数组.
//dns.getServers();返回一个用于当前解析的 IP 地址数组的字符串.
//dns.setServers(servers);指定一组 IP 地址作为解析服务器

var dns=require('dns');
dns.lookup("www.baidu.com",(err,address,family)=>{
	console.log(address);//220.181.111.188
	console.log(family);//4
})
dns.lookupService('175.102.24.31','8013',(err,hostname,service)=>{//参数无输出,效果不详,回调函数间隔几秒执行,然后自动退出函数,具体情况有待深入测试
	console.log(`hostname:${hostname}`);//hostname:undefined
	console.log(`service:${service}`);//service:undefined
})
dns.resolve('www.baidu.com','A',(err,address)=>{
	console.log(address);//链接地址,[ '220.181.112.244', '220.181.111.188' ]
})
dns.resolve4("www.baidu.com",(err,address)=>{//仅能查询 IPv4(A记录)
	console.log(address);//链接地址,[ '220.181.112.244', '220.181.111.188' ]
})
dns.resolve6("www.baidu.com",(err,address)=>{//仅能查询 IPv6(AAAA查询)
	console.log(address);//此时结果为[]
})
dns.resolveMx("www.baidu.com",(err,address)=>{//仅能查询邮件交换(MX记录),addresses是 MX 记录数组,每一个包含优先级和交换属性
	console.log(address);//此时结果为[]
})
dns.resolveTxt("www.baidu.com",(err,address)=>{//仅能进行文本查询 (TXT记录)
	console.log(address);//此时结果为[]
})
dns.resolveSrv("www.baidu.com",(err,address)=>{//仅能进行服务记录查询 (SRV记录)
	console.log(address);//此时结果为[]
})
dns.resolveSoa("www.baidu.com",(err,address)=>{//仅能查询权威记录(SOA记录)
	console.log(address);//此时结果为{ nsname: 'www.a.shifen.com',hostmaster: 'a.shifen.com',serial: 393217,refresh: 7,retry: 2949998,expire: 1932640303,minttl: 274882921 }或者为undefined
})
dns.resolveNs("www.baidu.com",(err,address)=>{//仅能进行域名服务器记录查询(NS记录)
	console.log(address);//undefined
})
dns.resolveCname("www.baidu.com",(err,address)=>{//仅能进行别名记录查询 (CNAME记录)
	console.log(address);//此时结果为[ 'www.a.shifen.com' ]
})
dns.reverse("220.181.112.244",(err,address)=>{
	console.log(address);//undefined
})

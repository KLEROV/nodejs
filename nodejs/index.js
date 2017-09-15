var server=require('./server');
var router=require('./route');
//var requestHandlers=require('./requestHandlers');
//var handle={};
//handle['/']=server.httpRequest;
//handle['/start']=server.httpRequest;
//handle['/upload']=server.upload;

server.httpRequest(router.route);
//server.upload(321);
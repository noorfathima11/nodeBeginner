console.log("1");
var http = require("http");
/*
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type" : "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
*/
exports.start = function start(){
console.log("2");
 function onRequest(request, response){
  console.log("Request Received.");
  response.writeHead(200, {"Content-Type" : "text/plain"});
  response.write("Hello World");
  response.end();
 }

 http.createServer(onRequest).listen(8888);
 console.log("Server has started");
}

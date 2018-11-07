console.log("1");
var http = require("http");
var url = require("url");

/*
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type" : "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
*/
exports.start = function start(route, handle){
console.log("2");
 function onRequest(request, response){
  console.log("Request Received.");
  var pathname = url.parse(request.url).pathname;
  console.log("Request for " + pathname + " received.");

  route(handle, pathname);

  response.writeHead(200, {"Content-Type" : "text/plain"});
  response.write("Hello World");
  response.end();
 }

 http.createServer(onRequest).listen(8888);
 console.log("Server has started");
}

var server = require("./server");
console.log("imported server");

var router = require("./router")
console.log("imported router");

var requestHandlers = require("./requestHandlers");
console.log("imported requestHandlers");

var handle = {};
handle ["/"] = requestHandlers.start;
handle ["/start"] = requestHandlers.start;
handle ["/upload"] = requestHandlers.upload;

server.start(router.route, handle);

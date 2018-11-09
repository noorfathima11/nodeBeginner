var exec = require("child_process").exec

function start(response){
  console.log("Request handler 'start' was called. ");

/*
  function sleep(milliSeconds){
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
  }
  sleep(10000);
*/
   exec("ls -lah", function (error, stdout, stderr){
     console.log('stdout: ' + stdout);
     console.log('stderr: ' + stderr);
     if(error !== null){
       console.log('exec error: ' + error);
     }
     response.writeHead(200, {"Content-Type":"text/plain"});
     console.log("ALL OK");
     response.write(stdout);
     response.end();
   });
   console.log("OK");


}

function upload(response){
  console.log("Request handler 'upload' was called. ");
  response.writeHead(200, {"Content-Type" : "text/plain"});
  response.write("Hello upload");
  response.end();
}

exports.start = start;
exports.upload = upload;

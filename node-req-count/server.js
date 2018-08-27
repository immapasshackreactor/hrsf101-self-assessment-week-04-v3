var url = require("url");
var http = require("http");
var path = require("path");

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, "");
  let body = [];
  if (request.method === "POST") {
    console.log("POSTING");
    if (!globalCounter.property) {
      globalCounter.property = 1;
    } else {
      globalCounter.property++;
    }
    console.log(globalCounter.property);
    response.statusCode = 201;
    response.end("posted");
  } else if (request.method === "GET") {
    // console.log(request.body);
    // request
    //   .on("data", chunk => {
    //     body.push(chunk);
    //   })
    //   .on("end", () => {
    //     body = Buffer.concat(body).toString();
    response.statusCode = 200;
    response.end(globalCounter.property);
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

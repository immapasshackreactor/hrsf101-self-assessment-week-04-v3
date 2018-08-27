var url = require("url");
var http = require("http");
var path = require("path");

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, "");

  if (request.method === "POST") {
    // YOUR CODE HERE
    if (endpoint === "/dogs") {
      if (!globalCounter.dogs) {
        globalCounter.dogs = 1;
        response.end("Dogs incremented");
      } else {
        globalCounter.dogs++;
        response.end("Dogs incremented");
      }
      response.end();
    }
    if (endpoint === "/cats") {
      if (!globalCounter.cats) {
        globalCounter.cats = 1;
        response.end("Cats incremented");
      } else {
        globalCounter.cats++;
        response.end("Cats incremented");
      }
      response.end();
    }
  } else if (request.method === "GET") {
    // YOUR CODE HERE
    if (endpoint === "/dogs") {
      console.log(globalCounter.dogs);
      if (!globalCounter.dogs) {
        response.write("Empty");
      } else {
        response.write(JSON.stringify(globalCounter.dogs));
      }
      response.end();
    }
    if (endpoint === "/cats") {
      console.log(globalCounter.cats);
      if (!globalCounter.cats) {
        response.write("Empty");
      } else {
        response.write(JSON.stringify(globalCounter.cats));
      }
      response.end();
    }
    response.end();
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

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
      } else {
        globalCounter.dogs++;
      }
      response.end('Dogs Incremented');
    }
    if (endpoint === "/cats") {
      if (!globalCounter.cats) {
        globalCounter.cats = 1;
      } else {
        globalCounter.cats++;
      }
      response.end('Cats incremented');
    }
  } else if (request.method === "GET") {
    // YOUR CODE HERE
    if (endpoint === "/dogs") {
      if (!globalCounter.dogs) {
        response.write("Empty");
      } else {
        response.write(JSON.stringify(globalCounter.dogs));
      }
      response.end();
    }
    if (endpoint === "/cats") {
      if (!globalCounter.cats) {
        response.write("Empty");
      } else {
        response.write(JSON.stringify(globalCounter.cats));
      }
      response.end();
    }
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

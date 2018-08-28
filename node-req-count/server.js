var url = require("url");
var http = require("http");

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, "");

  if (request.method === "POST") {

    if (endpoint === "/dogs") {
      console.log(endpoint);
      if (!globalCounter.dogs) {
        globalCounter.dogs = 1;
      } else {
        globalCounter.dogs++;
      }
      response.statusCode = 201;
      response.end();
    }
    if (endpoint === "/cats") {
      if (!globalCounter.cats) {
        globalCounter.cats = 1;
      } else {
        globalCounter.cats++;
      }
      response.statusCode = 201;
      response.end();
    } else {
      response.statusCode = 201;
      response.end('response');
    }
  } else if (request.method === "GET") {
    // YOUR CODE HERE
    if (endpoint === "/dogs") {
      if (!globalCounter.dogs) {
      } else {
        response.write(JSON.stringify(globalCounter.dogs));
      }
      response.statusCode = 201;
      response.end();
    }
    if (endpoint === "/cats") {
      if (!globalCounter.cats) {
      } else {
        response.write(JSON.stringify(globalCounter.cats));
      }
      response.statusCode = 201;
      response.end();
    } else {
      response.statusCode = 201;
      response.end('response');
    }
  } else {
    response.statusCode = 404;
    response.end();
  }

});

// Do not edit this line
module.exports = server;

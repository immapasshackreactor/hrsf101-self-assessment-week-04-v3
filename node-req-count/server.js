var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    response.statusCode = 201;
    if (globalCounter.hasOwnProperty(property)) {
      globalCounter[property] += 1;
    } else {
      globalCounter[property] = 1;
    }
    console.log(globalCounter)
    response.end();
  } else if (request.method === 'GET') {
    if (globalCounter.hasOwnProperty(property)) {
      response.writeHead(200);
      response.end(globalCounter[property].toString());
    } else {
      response.statusCode = 200; // not sure about the status code
      response.end()
    }
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

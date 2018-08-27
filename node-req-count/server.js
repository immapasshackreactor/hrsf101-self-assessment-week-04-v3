var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    console.log(property)
    if(globalCounter.property === undefined) {
      globalCounter.property = 1;
    } else {
      globalCounter.property++;
    }
    response.statusCode = 200
    response.end()
  } else if (request.method === 'GET') {
    if(globalCounter.proerty === undefined) {
      response.statusCode = 200;
      response.end()
    } else {
      response.statusCode = 200;
      response.end(globalCounter.property)
    }

  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {
};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    // YOUR CODE HERE
    if (globalCounter[property]) {
      globalCounter[property]++;
    } else {
      globalCounter[property] = 1;
    }
    response.end()

  } else if (request.method === 'GET') {
    // YOUR CODE HERE
    response.statuscode = 200;
    if (globalCounter[property]) {
      response.end(JSON.stringify(globalCounter[property]))
    } else {
      response.end(JSON.stringify(''))
    }
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    response.statusCode = 200;
    if (!globalCounter[property]) {
      globalCounter[property] = 1;
    } else {
      globalCounter[property]++;
    }
    response.wri
    response.end();
  } else if (request.method === 'GET') {
    response.statusCode = 200;
    response.write(JSON.stringify(globalCounter[property]));
    response.end();
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

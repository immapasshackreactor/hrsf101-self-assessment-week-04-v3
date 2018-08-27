var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    response.statusCode = 201;
    globalCounter[property] = globalCounter[property] + 1 || 1;
    response.end('Posted!');
  } else if (request.method === 'GET') {
    response.statusCode = 200;
    response.end(JSON.stringify(globalCounter[property]));
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  //unsure about endpoint
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
        request.on('data', (chunk) => {
          globalCounter[chunk] = chunk
        }).on('end', () => {
          response.end(globalCounter);
        });
      } else if (request.method === 'GET') {
        request.on('data', (chunk) => {
          globalCounter[chunk]
        }).on('end', () => {
          response.end(globalCounter);
        });
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    if (globalCounter[property] === undefined) {
      globalCounter[property] = 0; 
    };
    globalCounter[property]++;
    response.writeHead(201, {'Content-type': 'Application/JSON'});
    response.end(`count: ${globalCounter[property]}`);
  } else if (request.method === 'GET') {
    response.writeHead(200, {'Content-type': 'Application/JSON'});
    response.end(JSON.stringify(globalCounter[property]));
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

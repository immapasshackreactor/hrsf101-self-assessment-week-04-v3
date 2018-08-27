var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {
  dogs: 0,
  cats: 0
};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    if (request.url === '/dogs') {
      globalCounter.dogs++;
      response.end();
    } else if ( request.url === '/cats') {
      globalCounter.cats++;
      response.end();
    }
  } else if (request.method === 'GET') {
    if (request.url === '/dogs') {
      request.write(JSON.stringify(globalCounter.dogs),encoding='utf8');
      response.end();
    } else if ( request.url === '/cats') {
      request.write(JSON.stringify(globalCounter.cats),encoding='utf8');
      response.end();
    }
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

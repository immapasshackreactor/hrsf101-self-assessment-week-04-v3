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
    if (property === '/dogs') {
      globalCounter.dogs++;
      response.end();
    } else if ( property === '/cats') {
      globalCounter.cats++;
      response.end();
    }
  } else if (request.method === 'GET') {
    if (property === '/dogs') {
      request.write(JSON.stringify(globalCounter.dogs),encoding='utf8');
      response.end();
    } else if ( property === '/cats') {
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

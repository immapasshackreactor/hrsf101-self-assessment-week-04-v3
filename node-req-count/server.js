var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  var incrementCounter = function(property) {
    if (!globalCounter[property]) {
      globalCounter[property] = 1;
    } else {
      globalCounter[property] += 1;
    }
  };

  var getCount = function(property) {
    if (globalCounter[property]) {
      return globalCounter[property].toString();
    } else {
      return '';
    }
  };

  if (request.method === 'POST') {
    incrementCounter(property);
    response.end('');
  } else if (request.method === 'GET') {
    response.end(getCount(property));
  } else {
    response.statusCode = 404;
    response.end('');
  }
});

// Do not edit this line
module.exports = server;

var url = require('url');
var http = require('http');
var path = require('path');
var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  var incrementer = function(property) {
    if (globalCounter[property] === undefined) {
      globalCounter[property] = 1;
    } else {
      globalCounter[property] += 1;
    }
  };

  if (request.method === 'POST') {
    incrementer(property);
    response.end();
  } else if (request.method === 'GET') {
      if (globalCounter[property]) {
        return globalCounter[property].toString();
    } else {
      response.end();
    }
  } else {
    response.statusCode = 404;
    response.end();
  }  
});
  // Do not edit this line
module.exports = server;

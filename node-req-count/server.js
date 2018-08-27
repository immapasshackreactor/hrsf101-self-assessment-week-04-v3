var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');
// post should increment counter property for that endpoint, or set it to one if first time
// a get should return the counter value
  if (request.method === 'POST') {
    response.statusCode = 201;
    if (!globalCounter[property]) {
      globalCounter[property] = 1;
    } else {
      globalCounter[property] += 1;
    }
    response.end();
  } else if (request.method === 'GET') {
    response.statusCode = 200;
    if (!globalCounter[property]) {
      response.end()
    } else {
      response.end(JSON.stringify(globalCounter[property]))
    }
    // endopoint = '/dogs or /cats
    // property = 'dogs' or cats or whatever
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

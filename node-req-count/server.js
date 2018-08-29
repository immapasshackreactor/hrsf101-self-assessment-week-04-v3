var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function (request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');
  //The url.parse() method takes a URL string, parses it, and returns a URL object.

  if (request.method === 'POST') {
    //have to increase the property, make sure to see if property is defined, else increment by one

    if (globalCounter[property] === undefined) {
      globalCounter[property] = 1
    } else {
      globalCounter[property]++
    }
    response.writeHead(201);
    response.end(globalCounter[property])

  } else if (request.method === 'GET') {
    //have to return property count
    //if no property, return empty response

    if (globalCounter[property] !== undefined) {
      response.writeHead(200);
      response.end(globalCounter[property].toString());
    } else {
      response.writeHead(200);
      response.end();
    }
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;
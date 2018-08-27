var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    //Var-endpoint parses the URL then var-property replaces certain special characters using regex;
    //Prompt says globalCounter object should have that request's property incremented in a counter
    //If that property does not exist, set to 1, otherwise add 1 to existing property's value
    if (globalCounter.hasOwnProperty(property)) {
      globalCounter[property]++;
    } else {
      globalCounter[property] = 1;
    }
    response.statusCode = 201;
    response.end();
  } else if (request.method === 'GET') {
    //Take the property and check if it exists in globalCounter
    //If it does, respond with the "counter" value
    //Otherwise, respond with an empty value (empty string)
    var responseBody = '';
    if (globalCounter.hasOwnProperty(property)) {
      responseBody += globalCounter[property]
    } else {
      responseBody = '';
    }
      response.statusCode = 200;
      response.end(responseBody);
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

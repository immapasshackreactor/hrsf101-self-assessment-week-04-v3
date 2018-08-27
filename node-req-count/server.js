var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  request.on('error', (error) => console.log(error));
  
  let endpoint = url.parse(request.url, true).pathname;
  let property = endpoint.replace(/^\//, '');
  let exists = globalCounter.hasOwnProperty(property);


  if (request.method === 'POST') {
    exists ? globalCounter[property]++ : globalCounter[property] = 1;
    response.on('error', (error) => console.log(error));
    response.statusCode = 201;
    response.end();
  } else if (request.method === 'GET') {
    response.on('error', (error) => console.log(error));
    response.statusCode = 200;
    if (exists) {
      response.end(JSON.stringify(globalCounter[property]));
    } else {
      response.end();
    }
  } else {
    response.on('error', (error) => console.log(error));
    response.statusCode = 404;
    response.end();
  }
});

// Add response and request error handling?
// Do not edit this line
module.exports = server;

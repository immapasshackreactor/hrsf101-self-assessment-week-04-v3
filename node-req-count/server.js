var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST' && request.url === property) {
    //create place to store data
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = JSON.stringify(body);
      response.end(body);
    });
    // YOUR CODE HERE
  } else if (request.method === 'GET' && request.url === property) {
    response.on('data' () => {
     let body = JSON.stringify(data);
     response.end(data);
    });
    
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

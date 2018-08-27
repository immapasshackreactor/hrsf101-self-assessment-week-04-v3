var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    // YOUR CODE HERE
    let body = [];
    request.on('error', err) => {
      console.log(err);
    }).on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {});

  } else if (request.method === 'GET') {
    // YOUR CODE HERE
    let response.body = globalCounter;

  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

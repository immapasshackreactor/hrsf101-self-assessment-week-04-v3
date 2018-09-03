var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

// Note: not sure what the use of 'endpoint' and 'property' (given codes) are
// Chris L used properpty; but it is only optional for here/now
var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  // console.log('endpoint ' + endpoint);  // Endpoint's count on globalCounter
  var property = endpoint.replace(/^\//, '');
  // console.log('property ' + property);

  if (request.method === 'POST' && request.url === '/dogs') {
    // YOUR CODE HERE
    if(!globalCounter.dog) {
      globalCounter.dog = 1;
    } else {
      globalCounter.dog = globalCounter.dog + 1;
    }
    console.log('After POST, globalCounter.dog = ' + globalCounter.dog);
    var body = JSON.stringify(globalCounter.dog);
    response.end(body);
  } else if (request.method === 'GET' && request.url === '/dogs') {
    // YOUR CODE HERE
    console.log('Per GET, globalCounter.dog = ' + globalCounter.dog);
    if (!globalCounter.dog) {
      response.end('No dog posted yet');
    } else {
      var body = JSON.stringify(globalCounter.dog);
      response.end(body);
    }
  } else if (request.method === 'GET' && request.url !== '/dogs') {
    reponse.end();  // Empty response, for undefined route (the previous line)
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;
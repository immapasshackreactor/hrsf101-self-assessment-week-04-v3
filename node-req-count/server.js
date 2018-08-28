var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  // creates a request obj & response obj -- review old sprints 
  // console.log these... 
  var endpoint = url.parse(request.url, true).pathname;
  // takes a url string, parses it, and returns a URL object 
  var property = endpoint.replace(/^\//, '');
  // var port = 8000; 
  // var ip = 'localhost'; 

  if (request.method === 'POST' && request.url === '/dogs') {
    // YOUR CODE HERE
    response.statusCode = 201; 
    if (globalCounter[property] === undefined){
      globalCounter[property] = 1;
    } else { 
      globalCounter[property]++; 
    }
    console.log(globalCounter); 
    response.end(); 
  } else if (request.method === 'GET' && request.url === '/dogs') {
    if (globalCounter[property] !== undefined) {
      response.writeHead(200);
      response.end(globalCounter[property].toString());
    } else { 
    response.writeHead(200);
    response.end(); 
    }
  } else { 
    response.statusCode = 400; 
    response.end(); 
  } 
}); 

// Do not edit this line
module.exports = server;

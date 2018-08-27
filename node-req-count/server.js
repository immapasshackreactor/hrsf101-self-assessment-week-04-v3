var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request,response) {
  var endpoint = url.parse(request.url,true).pathname;

  if (request.method === 'POST') {
    
    if (globalCounter[endpoint]) {

      globalCounter[endpoint]++;

    } else {
        globalCounter[endpoint] = 1;
    }
    response.end();

  } else if (request.method === 'GET') {

    if (globalCounter[endpoint]) {

      response.statusCode = 200;
      // response.body = {globalCounter[endpoint]}     
      response.end()
   } 
    
  } else {
    response.statusCode = 404;
    response.end();
  }
});
// Do not edit this line
module.exports = server;

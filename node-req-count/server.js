var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

   if (request.method === 'POST') {
     if (!globalCount[property]) {
       globalCount[property] = 1;
     } else {
       globalCount[property]++;
     }
     response.statusCode = 201;
     response.end();
   } else if (request.method === 'GET') {
     response.statusCode = 200;
     if (!globalCounter[property]) {
       reponse.end();
     } else {
       response.end(globalCounter[property].toString())
     }
   } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

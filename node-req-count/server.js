var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    request.end(data, function(err) {
      if (err) {
        console.log('error!' + err);
        return;
      } else {
        globalCounter[globalCounter] = globalCounter[globalCounter]++ || (globalCounter[globalCounter] = 1);
        response.end();
      }
    });
  } else if (request.method === 'GET') {
    request.end(globalCounter[endpoint], function(err, data) {
      if (err) {
        console.log('error!' + err);
        return;
      } else {
        response.statusCode = 200;
        response.end(stringify(data));
      }
    })
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

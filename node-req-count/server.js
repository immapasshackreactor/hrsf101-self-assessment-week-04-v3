var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    if(!globalCounter[property]){
      globalCounter[property] = 1;
    } else {
      globalCounter[property] ++;
    }
    response.sendStatus(201);
    } else if (request.method === 'GET') {
      if (globalCounter[property]) {
        response.status(200).send(JSON.stringify(globalCounter[property]))
      } else {
        response.sendStatus(200).send(JSON.stringify());
      }
    } else {
      response.sendStatus(404);
    }

});

// Do not edit this line
module.exports = server;

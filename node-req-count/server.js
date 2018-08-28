var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    // YOUR CODE HERE
    // request.on('data', () => {
      globalCounter[property] ? globalCouner[property] ++ : globalCounter[property] = 1;
    // }).on('end', () => {
      response.statusCode = 200;
      reponse.end();
    })
    // let body = [];
    // request.on('data', (chunk) => {
    //   body.push(chunk);
    // }).on('end', () => {
    //   body = Buffer.concat(body).toString();
    //   response.end(body);
    // })


  } else if (request.method === 'GET') {
    // YOUR CODE HERE
    var reply = globalCounter[property].toString();
    response.statusCode = 201;
    response.end(reply);

  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

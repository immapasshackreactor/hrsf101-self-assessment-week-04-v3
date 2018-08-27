var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');
  const prop = endpoint.substr(1);

  if (request.method === 'POST') {
    // let data = [];
    // request.on('data', (chunk) => {
    //   data.push(chunk);
    // });
    // request.on('end', () => {
    //   const message = Buffer.concat(data).toString();
    //   let route =
    //   if (message === 'dogs')
    // });
    if (globalCounter[prop] === undefined) {
      globalCounter[prop] = 1;
    } else {
      globalCounter[prop] += 1;
    }
    response.statusCode = 201;
    response.end();
    console.log(globalCounter[prop]);
  } else if (request.method === 'GET') {
    let result = '';
    if (globalCounter[prop] !== undefined) {
      result = globalCounter[prop];
    }
    console.log('result', result);
    response.statusCode = 200;
    response.write(result.toString());
    response.end();
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

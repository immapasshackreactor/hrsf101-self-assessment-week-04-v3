var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  //I need to make a post request to the url with the specific endpoint
    //go to the property specified on the endpoint of globalCounter
    //increment it
    //then return it as part of the response


  //Really ran out of time on this one because my computer shut down on the way here and
  //I had to boot it back up, old 2012 macbook so couldnt code until 9:20...
  if (request.method === 'POST') {
    var property = endpoint.slice(1);
    request.post({
        url: `http://localhost/${endpoint}`,
        function(error, response, body){
            body[endpoint] += 1;
    })

    request.get(endpoint, function(req, res) {


    response.writeHead(201, { 'Content-Type': 'application/json'});
    response.end();
    });
  } else if (request.method === 'GET') {
    request.get(endpoint, function(req, res) {
      var property = endpoint.slice(1);
      var val = res.globalCounter.property;

      if (val === undefined) {
        response.end();
      } else {
        response.end(JSON.stringify(val));
      }
    });
    response.writeHead(200, { 'Content-Type': 'application/json'});
    response.end();
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

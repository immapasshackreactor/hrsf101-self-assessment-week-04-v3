var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    // fs.readFile(path[, options], callback) ... 'utf-8' is the optional parameter. Why do we need to utf-8 encode?

    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    // taking the data in the word files, trimming the white space, spliting each word into an array, and finding the length
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  // YOUR CODE HERE
  // pass the combined word count to the callback following node-style callback 

  getWordCount(filePathOne, function(err, data) {
    // we pass it a callback because it is expecting a callback as it's second argument  
    if (err) {
      return callback(err, null); 
    } else {
      var filePathOneCount = data; 
    }
    getWordCount(filePathTwo, (err, data) => {
      if (err) {
        return callback(err, null)
      } else {
        var filePathTwoCount = data; 
        callback(null, filePathOneCount + filePathTwoCount);
      }
    });
  });
};

// getTotalWordCount(); 
// then in terminal, you can type: "node async-word-count/async-word-count.js" ... this should run the entire file 

module.exports = getTotalWordCount;

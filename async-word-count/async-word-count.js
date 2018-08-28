var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  // YOUR CODE HERE
  getWordCount(filePathOne, function(err, wordCount) {
    if (err) {
      callback(err, null);
      return;
    }
    getWordCount(filePathTwo, function(error, wordC) {
      if (error) {
        callback(error, null);  
        return;
      }
      callback(null, wordCount + wordC);
    })
  })
};

module.exports = getTotalWordCount;

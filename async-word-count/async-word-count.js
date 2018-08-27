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
  fs.readFile(filePathOne, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null); 
    } else {
      var word1 = data.trim().split(' ').length;
      fs.readFile(filePathTwo, 'utf-8', function(err, data2) {
        if (err) {
          callback(err, null);
        }

        var word2 = data2.trim().split(' ').length;
        callback(null, word1 + word2);
      })
    }
  })
};

module.exports = getTotalWordCount;

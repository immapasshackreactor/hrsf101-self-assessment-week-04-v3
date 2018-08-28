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
  getWordCount(filePathOne, (err, wordCountOne) => {
    if (err) {
      throw err;
    }
    getwordCount(filePathTwo, (err, wordcountTwo) => {
      if (err) {
        throw err;
      }
      callback(null, getWordCountOne + getWordCountTwo);
    })
  })
};



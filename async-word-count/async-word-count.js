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
  let counter = 0;
  getWordCount(filePathOne, function(err, currCount) {
    if (err) {
      callback(err, null);
      return;
    } else {
      counter = currCount + currCount;
      getWordCount(filePathTwo, function(err, currCount) {
        if (err) {
          callback(err, null);
          return;
        } else {
          counter = counter + currCount;
          callback(counter);
        }
      });
    }
  });
};

module.exports = getTotalWordCount;

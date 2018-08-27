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
  var getTotalWordCount = 0;
  getWordCount(filePathOne, (err, data) => {
    getTotalWordCount += data;
    getWordCount(filePathTwo, (err, data2) => {
      getTotalWordCount += data2;
    });
  });
  return getTotalWordCount;
};

module.exports = getTotalWordCount;

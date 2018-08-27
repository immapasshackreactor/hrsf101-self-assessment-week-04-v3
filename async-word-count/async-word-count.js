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
  var countSum = 0;
  var handleCount = function(error, count) {
    if (error) {
      throw new Error('Count Error!');
    }
    countSum += count;
  };

  getWordCount(filePathOne, (error, fileOneCount) => {
    handleCount(error, fileOneCount);
    getWordCount(filePathTwo, (error, fileTwoCount) => {
      handleCount(error, fileTwoCount);
      callback(countSum);
    });
  });
};

module.exports = getTotalWordCount;

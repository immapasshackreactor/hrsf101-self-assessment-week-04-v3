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

var getTotalWordCount = function(filePathOne, filePathTwo, callback, result = null) {
    var total = 0;
    if (!result) {
      getWordCount(filePathOne, (err, wordCount) => {
        total += wordCount;
        getWordCount(filePathTwo, (err, wordCount) => {
          total += wordCount;
          getTotalWordCount(null, null, null, total);
        })
      });
    } else {
      return result;
    }
};

var path1 = './async-word-count/files/fileOne.txt';
var path2 = './async-word-count/files/fileTwo.txt';

module.exports = getTotalWordCount;
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
  let count1 = getWordCount(filePathOne, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    let wordCount1 = data;
    getWordCount(filePathTwo, (err, data2) => {
      if (err) {
        console.log(err);
      } else {
        let wordCount2 = data2;
        callback(null, wordCount1 + wordCount2);
      }
    });
  });
};

module.exports = getTotalWordCount;

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
  var wordCount1 = getWordCount(filePathOne, function(err, wordCount) {
    if (err) {
      console.log('error getting count');
      return;
    }
    return wordCount;
  })
  var wordCount2 = getWordCount(filePathTwo, function(err, wordCount) {
    if (err) {
      console.log('error getting count');
      return;
    }
    return wordCount;
  })
  var total = wordCount1 + wordCount2;
  callback(null, total);

};

module.exports = getTotalWordCount;

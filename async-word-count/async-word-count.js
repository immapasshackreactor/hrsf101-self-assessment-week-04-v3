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

//use getwordcount on each file
var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  var one = getWordCount(filePathOne, callback)
  var two = getWordCount(filePathTwo, callback)
  var total = one + two;
  callback(nulll, total);
};

module.exports = getTotalWordCount;

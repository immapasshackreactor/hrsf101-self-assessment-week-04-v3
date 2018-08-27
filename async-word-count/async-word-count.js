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
  getWordCount(filePathOne, function(err, data) {
    if (err) {
      return callback(err, null);
    }
    let fileOneCount = data;
    getWordCount(filePathTwo, function(err, data) {
      if (err) {
        return callback(err, null);
      }
      let fileTwoCount = data;
      callback(null, fileOneCount + fileTwoCount);
    });
  });
};



module.exports = getTotalWordCount;

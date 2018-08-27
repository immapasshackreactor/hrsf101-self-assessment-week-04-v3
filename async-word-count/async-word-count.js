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
  get.wordCount(filePathOne, function(err, dataOne){
    if (err) {
      callback(err);
    } else {
      getWordCount(filePathTwo, function(err, dataTwo){
        if (err) {
          callback(err);
        } else {
          callback(parseInt(dataOne) + parseInt(dataTwo));
        };
      });
    }
  });
};

module.exports = getTotalWordCount;

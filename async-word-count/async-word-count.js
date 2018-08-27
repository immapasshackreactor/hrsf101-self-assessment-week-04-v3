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
  getWordCount(filePathOne, function(err, dataFileOne) {
    if (err) {
      callback(err, null);

    } else {
      getWordCount(filePathTwo, function(err, dataFileTwo){
        if (err) {
          callback(err, null);
          return;
        } else {
          callback (null, parseInt(dataFileOne, 10) + parseInt(dataFileTwo, 10));
        }

      });

    }

  });


};

module.exports = getTotalWordCount;


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
  //have to get total word count, already have function for word count
  //getWordCount has parameter for filePath and a callback
  //have two file paths, have to count them up...
  //put one filepath in getwordcount, then check for error
  //if no error, check next filepath(Two), then check for error
  //then add both up

  getWordCount(filePathOne, (errForOne, dataForOne) => {
    if (errForOne) {
      callback(errForOne, null);
      return;
    } else {
        getWordCount(filePathTwo, (errForTwo, dataForTwo) => {
          if (errForTwo) {
            callback(errForTwo, null);
            return;
          } else {
            callback(null, dataForOne + dataForTwo)
          }
        })
      }
    })
};

module.exports = getTotalWordCount;

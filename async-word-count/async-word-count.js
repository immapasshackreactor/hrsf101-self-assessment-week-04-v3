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

    getWordCount(filePathOne, (err, count1) => {
      if (err) {
        throw err;
      }
      getWordCount(filePathTwo, (err, count2) => {
        if (err) {
          throw err;
        }
        callback(null, count1 + count2);
      })
      
    })

};

module.exports = getTotalWordCount;

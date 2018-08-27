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
  // pass the combined word count to the callback following node-style callback 
  var finalCount = 0; 

  getWordCount(filePathOne, (err, results) => {
    if (err) {
      console.log('error in file path')
    } else {
      finalCount += wordCount; 
    }
  }
  getWordCount(filePathTwo, (err, results) => {
    if (err) {
      console.log('error in file path')
    } else {
      finalCount += wordCount; 
    }
  }

  callback(finalCount); 
   
};

module.exports = getTotalWordCount;

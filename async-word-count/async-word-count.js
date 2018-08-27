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
  var filePathOne = path.join(exports.dataDir, `fileOne.txt`);
  var filePathTwo = path.join(exports.dataDir, `fileTwo.txt`);
  var totalCount = 0;
  console.log('totalCount: ' + totalCount);
  getWordCount(filePathOne, function(err, totalCount) {
    if(err) {
      console.log("error");  // For my own reference
    } else {
      console.log('totalCount: ' + totalCount);
      callback(err, totalCount);
      //getWordCount(filePathTwo, function(err, totalCount))
    }
  })
};

module.exports = getTotalWordCount;

exports.dataDir = path.join(__dirname, 'files');

// Simple test
// var filePathOne = path.join(exports.dataDir, `fileOne.txt`);
// var filePathTwo = path.join(exports.dataDir, `fileTwo.txt`);
// getTotalWordCount(filePathOne, filePathTwo, cb);

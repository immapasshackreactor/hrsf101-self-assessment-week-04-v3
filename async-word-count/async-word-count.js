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
  //store sum in storage
  var sumOfWords = 0; 
  //use word count func to access and count each word of file one 
    // add results to storage sum
  // use word count func to access and count each word of file two
    // add results to storage sum
  // return storage sum
  // var first = getWordCount(filePathOne, (err, data) => {
  
  // })
  // var second = getWordCount(fi)
  // })
  

};

module.exports = getTotalWordCount;

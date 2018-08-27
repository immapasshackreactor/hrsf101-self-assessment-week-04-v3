var fs = require('fs');
var path = require('path');

// var filePath = (__dirname + 'fileOne.txt')

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      console.log(err)
      callback(err, null);
      return;
    }
    var wordCount = data.trim().split(' ').length;
    console.log("wordCount = ", wordCount)
    callback(null, wordCount);
  });
};



var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  var total = 0;

  getWordCount(filePathOne, function(err, countOne) {
    console.log('filePathOne WC: ', countOne);
    total += countOne;

    getWordCount(filePathTwo, function(err , countTwo) {
      console.log('filePathTwo WC: ', countTwo);
      total += countTwo;
      // callback(total)
      return total;
    });
  });
  

}



module.exports = getTotalWordCount('../async-word-count/files/fileOne.txt', '../async-word-count/files/fileTwo.txt')
// console.log(getTotalWordCount('../async-word-count/files/fileOne.txt'), total())
console.log(getTotalWordCount)
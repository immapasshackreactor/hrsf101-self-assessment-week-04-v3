var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    console.log('filePath: ' + filePath);  // For debugging
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

// Note: getTotalWordCount()'s callback is diff from getWordCount's callback (from above)
var getTotalWordCount = function(filePathOne, filePathTwo, cb) {
  // YOUR CODE HERE
  // var totalWordCount = 0;
  
  getWordCount(filePathOne, function(err, wordCountOne){
    if(err) {
      console.log('Error with file one');
    } else {
      // totalWordCount = totalWordCount + wordCountOne;
      getWordCount(filePathTwo, function(err, wordCountTwo) {
        if(err) {
          console.log('Error with file two');
        } else {
          // totalWordCount = totalWordCount + wordCountTwo;
          // return totalWordCount;
          cb(wordCountOne, wordCountTwo);
        }
      });
    }
  });
}

// Note: relative directory ('./') does not work here
// var fp1 = './files/fileOne.txt';
var fp1 = path.join(__dirname, 'files/fileTwo.txt');
var fp2 = path.join(__dirname, 'files/fileTwo.txt');
getTotalWordCount(fp1, fp2, function(wc1, wc2){
  var totalWordCount = wc1 + wc2;
  console.log(totalWordCount);
  return totalWordCount;
})


module.exports = getTotalWordCount;

exports.dataDir = path.join(__dirname, 'files');


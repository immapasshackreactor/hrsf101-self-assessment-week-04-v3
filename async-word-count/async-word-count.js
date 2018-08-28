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
  var countSum = 0;

  const handleCount = function(count) {
    countSum += count;
  };

  getWordCount(filePathOne, (error, fileOneCount) => {
    if (error) {
      callback(error);
      return;
    }
    handleCount(fileOneCount);

    getWordCount(filePathTwo, (error, fileTwoCount) => {
      if (error) {
        callback(error);
        return;
      }
      handleCount(fileTwoCount);
      callback(null, countSum);
    });
  });
};

// getTotalWordCount(
//   path.join(__dirname, 'files/fileOne.txt'),
//   path.join(__dirname, 'files/fileTwo.txt'),
//   (error, count) => {
//     console.log(count);
//   }
// );

module.exports = getTotalWordCount;

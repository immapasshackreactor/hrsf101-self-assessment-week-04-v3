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
  getWordCount(filePathOne, (err, data) => {
    if (err) {
      callback(err, null);
      return;
    } else {
      console.log(data);
      var fileOneWordCount = data;
      getWordCount(filePathTwo, (err, data) => {
        if (err) {
          callback(err, null);
          return;
        } else {
          var fileTwoWordCount = data;
          var sum = fileOneWordCount + fileTwoWordCount;
          console.log(sum);
          callback(null, sum);
          return;
        }
      });
    }
  })
};
getTotalWordCount('/Users/javi/hrsf-101/hrsf101-self-assessment-week-04-v3/async-word-count/files/fileOne.txt', '/Users/javi/hrsf-101/hrsf101-self-assessment-week-04-v3/async-word-count/files/fileTwo.txt', (err, data) => {
  console.log(data);
})
module.exports = getTotalWordCount;

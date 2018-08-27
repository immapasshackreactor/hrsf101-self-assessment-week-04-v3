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
  getWordCount(filePathOne, (resolve, reject) => {
    if (err) {
      reject(err);
      return;
    } else {
      resolve(wordCount);
    }   
  })
  .then(wordCountOne => {
    callback(wordCountOne, getWordCount(filePathTwo, (resolve, reject) => {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(wordCountTwo);
      }
    }))
  })
  .catch(err => console.log(err));
};

module.exports = getTotalWordCount;

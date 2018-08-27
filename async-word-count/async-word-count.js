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
  //I: two files and a callback that accepts the sum of words in each file
  //O: callback that takes in the combined sum of words in each file
  //strategy: call getWordCount for each file and pass the 
    //call getWordCount
    getWordCount(filePathOne, filePathTwo, (err, data) => {
      if (err) {
        throw err;
        console.log('there was an error');
      }
      callback(null, filePathOne, filePathTwo);
    })
      //if error, callback err, err, null 
      //else pass files to wordcount with err set to null 

};

module.exports = getTotalWordCount;

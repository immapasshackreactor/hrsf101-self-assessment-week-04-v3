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
  getWordCount(filePathOne, function(err, count1) {
  	if (err) {
  	  return callback(err, null);
  	}
  	getWordCount(filePathTwo, function(err, count2) {
  	  if (err) {
  	  	return callback(err, null);
  	  }
  	  totalCount = count1 + count2;
  	  callback(null, totalCount);
  	});
  });
};

module.exports = getTotalWordCount;

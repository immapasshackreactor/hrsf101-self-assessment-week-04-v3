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
	var totalWordCount = 0;

	getWordCount(filePathOne, function(err, wordCount) {
		if (err) {
			console.error(err);
			return;
		}
		totalWordCount += wordCount;
	});

	getWordCount(filePathTwo, function(err, wordCount) {
		if (err) {
			console.error(err);
			return;
		}
		totalWordCount += wordCount;
	});


  // fs.readDir(filePathOne, 'utf-8', function(err, files) {
  // 	if (err) {
  // 		callback(err, null);
  // 		return;
  // 	}
  // 	files.forEach(function(file) {
  // 		// console.log('here are all the files:', file);
  // 		getWordCount(file, function(err, wordCount) {
  // 			if (err) {
  // 				console.error(err);
  // 				return;
  // 			}
  // 			totalWordCount += wordCount;
  // 		});
  // 	});

  // 	fs.readDir(filePathTwo, 'utf-8', function(err, files) {
  // 		files.forEach(function(file) {
  // 			// console.log('here are the second files:' file);
  // 			getWordCount(file, function(err, wordCount) {
  // 			if (err) {
  // 				console.error(err);
  // 				return;
  // 			}
  // 			totalWordCount += wordCount;
	 //  		})
  // 		});
  // 	});
  return totalWordCount;
};

module.exports = getTotalWordCount;

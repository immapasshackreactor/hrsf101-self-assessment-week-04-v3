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
	var counter = 0;
	// Invoke getWordCount twice in nested callback form;
	// First getWordCount
	getWordCount(filePathOne, (err, data) => {
		if (err) {
			callback(err, null);
			return;
		}
		counter += data;
		// Second getWordCount:
		getWordCount(filePathTwo, (err, data2) => {
			if (err) {
				callback(err, null);
				return;
			}
			counter += data2;
			callback(null, counter);
		});
	});
};

getTotalWordCount(
	'/Users/davidhong/Desktop/HackReactor/hrsf101-self-assessment-week-04-v3/async-word-count/files/fileTwo.txt',
	'/Users/davidhong/Desktop/HackReactor/hrsf101-self-assessment-week-04-v3/async-word-count/files/fileOne.txt',
	(err, data) => console.log(data)
);

//79 + 58 = 137;

module.exports = getTotalWordCount;

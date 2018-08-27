var fs = require("fs");
var path = require("path");

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, "utf-8", function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(" ").length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  // Call getwordCount on filePathOne using a callback that adds the return value to the total count
  getWordCount(filePathOne, function(err, data) {
    var totalWordCount = data;
    console.log(totalWordCount);
    getWordCount(filePathTwo, function(err, data) {
      totalWordCount += data;
      console.log(totalWordCount);
      return totalWordCount;
    });
  });
  // Call getwordCount on filePathTwo using the same callback
  // Make sure to use error first pattern
};

getTotalWordCount("./files/fileOne.txt", "./files/fileTwo.txt", () => {});

module.exports = getTotalWordCount;

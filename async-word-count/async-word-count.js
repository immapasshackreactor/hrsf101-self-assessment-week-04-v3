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
  getWordCount(filePathOne, (err, firstWordCount) => {
    if (err) {
      callback(err, null);
    } else {
      getWordCount(filePathTwo, (err, secondWordCount) => {
        if (err) {
          callback(err, null);
        } else {
          var total = firstWordCount + secondWordCount;
          callback(null, total);
        }
      });
    }
  });
};

module.exports = getTotalWordCount;

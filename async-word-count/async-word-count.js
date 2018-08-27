var fs = require("fs");
var path = require("path");

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, "utf-8", function(err, data) {
    if (err) {
      callback(err, null);
      return;
    } else {
      var wordCount = data.trim().split(" ").length;
      callback(null, wordCount);
    }
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  fs.readFile(filePathOne, "utf-8", function(err, data) {
    if (err) {
      callback(err, null);
      return;
    } else {
      function(err, data) {
        if (err) {
          callback(err, null);
        } else {
          fs.readFile(filePathTwo, "utf-8", function(err, data2) {
            if(err) {
              callback(err, null);
              return;
            } else {
              var wordCount = data.trim().split(" ").length + data2.trim().split(" ").length;
              callback(null, wordCount);
            }
          });
        }
      }
    }
  });
};

module.exports = getTotalWordCount;

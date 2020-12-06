"use strict";
const fs = require("fs");

function parseFileToInt(filename) {
  return fs
    .readFileSync(filename, "utf8")
    .split("\n")
    .map((value) => Number(value));
}

function parseFile(filename) {
  return fs.readFileSync(filename, "utf8").split("\r\n");
}

module.exports = {
  parseFiletoInt: parseFileToInt,
  parseFile: parseFile,
};

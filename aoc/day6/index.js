const { group } = require("console");
const utils = require("../../utils");

function aoc6_1(filename) {
  const file = utils.parseFileToParagraphs(filename);
  const filtered = file.map((value) => {
    const letters = value.replace(/(\r\n)/g, "").split("");
    return new Set(letters).size;
  });
  return filtered.reduce((prev, curr) => curr + prev);
}

function aoc6_2(filename) {
  let sum = 0;
  const file = utils.parseFileToParagraphs(filename);
  for (let paragraph of file) {
    const uniqueLetter = new Set(paragraph.split("\r\n")[0]);
    const groups = paragraph.split("\r\n");
    for (let letter of uniqueLetter) {
      if (
        groups.every((group) => {
          return group.search(letter) >= 0;
        })
      ) {
        sum = sum + 1;
      }
    }
  }

  return sum;
}

module.exports = {
  part1: aoc6_1("./aoc/day6/input.txt"),
  part2: aoc6_2("./aoc/day6/input.txt"),
};

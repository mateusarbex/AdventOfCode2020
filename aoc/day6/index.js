const utils = require("../../utils");

function aoc6_1(filename) {
  const file = utils.parseFileToParagraphs(filename);
  const filtered = file.map((value) => {
    const letters = value.replace(/(\r\n)/g, "").split("");
    return new Set(letters).size;
  });
  return filtered.reduce((prev, curr) => curr + prev);
}

function aoc6_2(filename) {}

module.exports = {
  part1: aoc6_1("./aoc/day6/input.txt"),
  part2: aoc6_2("./aoc/day6/input.txt"),
};

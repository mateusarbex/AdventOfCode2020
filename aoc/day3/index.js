const utils = require("../../utils");

function downTheSlope(right, down, input) {
  let trees = 0;
  let position = 0;
  for (i = 0; i < input.length; i += down) {
    if (input[i][position] === "#") {
      trees++;
    }
    position + right >= input[i].length
      ? (position = position + right - input[i].length)
      : (position += right);
  }
  return trees;
}

function aoc3_1(filename) {
  const file = utils.parseFile(filename);
  return downTheSlope(3, 1, file);
}

function aoc3_2(filename) {
  const file = utils.parseFile(filename);
  let result = downTheSlope(1, 1, file);
  result *= downTheSlope(3, 1, file);
  result *= downTheSlope(5, 1, file);
  result *= downTheSlope(7, 1, file);
  result *= downTheSlope(1, 2, file);
  return result;
}

module.exports = {
  part1: aoc3_1("./aoc/day3/input.txt"),
  part2: aoc3_2("./aoc/day3/input.txt"),
};

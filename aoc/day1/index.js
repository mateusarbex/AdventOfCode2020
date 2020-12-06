const utils = require("../../utils");

function aoc_day1_1(file) {
  const input = utils.parseFiletoInt(file);
  for (let value of input) {
    let search = 2020 - value;
    if (input.find((numbers) => search === numbers) > 0) {
      return search * value;
    }
  }
}

function aoc_day1_2(file) {
  const input = utils.parseFiletoInt(file).sort((a, b) => a - b);
  input.shift();
  for (let index in input) {
    let indexLeftBound = Number(index) + 1;
    let indexRightBound = input.length - index;
    while (indexLeftBound < indexRightBound) {
      if (
        input[indexLeftBound] + input[indexRightBound] + input[index] ===
        2020
      ) {
        return input[indexLeftBound] * input[indexRightBound] * input[index];
      } else if (
        input[indexLeftBound] + input[indexRightBound] + input[index] <
        2020
      ) {
        indexLeftBound++;
      } else {
        indexRightBound--;
      }
    }
  }
  return input;
}

module.exports = {
  part1: aoc_day1_1("./aoc/day1/input.txt"),
  part2: aoc_day1_2("./aoc/day1/input.txt"),
};

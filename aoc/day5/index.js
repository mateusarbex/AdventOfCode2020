const utils = require("../../utils");

function getList(file) {
  return file
    .map((seat) => {
      return {
        seat: seat,
        row: getPosition(seat.slice(0, 7), 127),
        column: getPosition(seat.slice(7), 7),
        id:
          getPosition(seat.slice(0, 7), 127) * 8 +
          getPosition(seat.slice(7), 7),
      };
    })
    .filter((seat) => seat.seat)
    .sort((a, b) => b.id - a.id);
}

function getPosition(set, max) {
  let boundHigh = max;
  let boundLow = 0;
  for (let instruction of set) {
    if (instruction === "F" || instruction === "L") {
      boundHigh = Math.floor((boundHigh + boundLow) / 2);
    } else {
      boundLow = Math.ceil((boundHigh + boundLow) / 2);
    }
  }
  return boundLow;
}

function aoc5_1(filename) {
  const file = getList(utils.parseFile(filename));
  return file.shift();
}

function aoc5_2(filename) {
  const file = getList(utils.parseFile(filename));
  const minimum = file[file.length - 1].id;
  const max = file[0].id;
  for (let i = 0; i <= 127; i++) {
    for (let j = 0; j <= 7; j++) {
      if (
        file.findIndex((seat) => seat.row === i && seat.column === j) < 0 &&
        i * 8 + j < max &&
        i * 8 + j > minimum
      ) {
        return i * 8 + j;
      }
    }
  }

  return file;
}

module.exports = {
  part1: aoc5_1("./aoc/day5/input.txt"),
  part2: aoc5_2("./aoc/day5/input.txt"),
};

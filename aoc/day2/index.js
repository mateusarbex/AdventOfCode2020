const utils = require("../../utils");

function mapFile(line) {
  if (line) {
    const bounds = line.match(/[0-9]+/g);
    const letter = line.match(/[A-z]+/g);
    const password = line.match(/[A-z]+/g);
    return {
      min: Number(bounds[0]),
      max: Number(bounds[1]),
      letter: letter[0],
      password: password[1],
    };
  }
}

function aoc_day2_1(file) {
  let valid = 0;
  const mappedFile = utils.parseFile(file).map(mapFile);
  for (let pass of mappedFile) {
    if (pass) {
      const occurrence = pass.password.split(pass.letter);
      if (
        occurrence.length - 1 >= pass.min &&
        occurrence.length - 1 <= pass.max
      ) {
        valid++;
      }
    }
  }
  return valid;
}

function aoc_day2_2(file) {
  let valid = 0;
  const mappedFile = utils.parseFile(file).map(mapFile);
  for (let pass of mappedFile) {
    if (pass) {
      if (
        (pass.password[pass.min - 1] === pass.letter ||
          pass.password[pass.max - 1] === pass.letter) &&
        !(
          pass.password[pass.min - 1] === pass.letter &&
          pass.password[pass.max - 1] === pass.letter
        )
      ) {
        valid++;
      }
    }
  }
  return valid;
}

module.exports = {
  part1: aoc_day2_1("./aoc/day2/input.txt"),
  part2: aoc_day2_2("./aoc/day2/input.txt"),
};

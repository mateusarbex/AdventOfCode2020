const utils = require("../../utils");

function validator(input) {
  return (
    input
      .match(/(ecl)?(hcl)?(iyr)?(byr)?(pid)?(hgt)?(eyr)?/g)
      .filter((match) => match).length === 7
  );
}

function fieldValidator(field, value) {
  switch (field) {
    case 1:
      if (value.length == 4) {
        return Number(value) >= 1920 && Number(value) <= 2002;
      }
      return false;
    case 2:
      if (value.length === 4) {
        return Number(value) >= 2010 && Number(value) <= 2020;
      }
      return false;
    case 3:
      if (value.length === 4) {
        return Number(value) >= 2020 && Number(value) <= 2030;
      }
      return false;
    case 4:
      if (value.match(/cm/g)) {
        const numeric = Number(value.split(/cm/g)[0]);
        return numeric >= 150 && numeric <= 193;
      } else if (value.match(/in/g)) {
        const numeric = Number(value.split(/in/g)[0]);
        return numeric >= 59 && numeric <= 76;
      }
      return false;
    case 5:
      if (value.match(/(#+[A-z0-9]{6}\b)/g)) {
        return true;
      } else return false;
    case 6:
      if (value.match(/(amb|blu|brn|gry|grn|hzl|oth)/g)) {
        return true;
      }
      return false;
    case 7:
      if (value.length === 9) {
        return true;
      }
      return false;
  }
}

function aoc4_1(filename) {
  const file = utils.parseFileToParagraphs(filename);
  let valid = 0;
  for (let para of file) {
    if (validator(para)) {
      valid++;
    }
  }
  return valid;
}

function aoc4_2(filename) {
  const file = utils.parseFileToParagraphs(filename);
  let valid = 0;
  for (let para of file) {
    if (validator(para)) {
      if (
        fieldValidator(
          1,
          para.match(/(?:byr:)([A-z#0-9]+)/g)[0].split(":")[1]
        ) &&
        fieldValidator(
          2,
          para.match(/(?:iyr:)([A-z#0-9]+)/g)[0].split(":")[1]
        ) &&
        fieldValidator(
          3,
          para.match(/(?:eyr:)([A-z#0-9]+)/g)[0].split(":")[1]
        ) &&
        fieldValidator(
          4,
          para.match(/(?:hgt:)([A-z#0-9]+)/g)[0].split(":")[1]
        ) &&
        fieldValidator(
          5,
          para.match(/(?:hcl:)([#A-z0-9]+)/g)[0].split(":")[1]
        ) &&
        fieldValidator(
          6,
          para.match(/(?:ecl:)([A-z#0-9]+)/g)[0].split(":")[1]
        ) &&
        fieldValidator(7, para.match(/(?:pid:)([A-z#0-9]+)/g)[0].split(":")[1])
      ) {
        valid++;
      }
    }
  }
  console.log(valid);
  return valid;
}

module.exports = {
  part1: aoc4_1("./aoc/day4/input.txt"),
  part2: aoc4_2("./aoc/day4/input.txt"),
};

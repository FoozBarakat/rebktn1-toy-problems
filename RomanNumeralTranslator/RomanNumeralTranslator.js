// Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

// In a roman numeral, each character adds its value to the total. See the helper object DIGIT_VALUES for the correspondence between roman numeral characters and integers.
// VI = 6 (5 + 1 = 6)
// LXX = 70 (50 + 10 + 10 = 70)
// MCC = 1200 (1000 + 100 + 100 = 1200)

// When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.
// IV = 4 (5 – 1 = 4)
// XC = 90 (100 – 10 = 90)
// CM = 900 (1000 – 100 = 900)

// You should return “null” on invalid input.

// You've got Helpers!

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function translateRomanNumeral(romanNumeral) {
  var arr = [];
  var result = 0;

  for (var i = 0; i < romanNumeral.length; i++) {
    if (DIGIT_VALUES[romanNumeral[i]]) {
      arr.push(DIGIT_VALUES[romanNumeral[i]]);
    } else {
      return null;
    }
  }

  var larger = Math.max(...arr);
  var index = arr.indexOf(larger);

  if (index === 0) {
    for (var i = 0; i < arr.length; i++) {
      result = arr[i] + result;
    }
  } else {
    for (var i = arr.length - 1; i >= 0; i--) {
      result = arr[i] - result;
    }
  }

  return Math.abs(result);
}

console.log(translateRomanNumeral('fkjsd'), 'result: null');

console.log(translateRomanNumeral('IV'), 'result: 4');
console.log(translateRomanNumeral('XC'), 'resutl: 90');
console.log(translateRomanNumeral('CM'), 'result: 900');

console.log(translateRomanNumeral('VI'), 'result: 6');
console.log(translateRomanNumeral('LXX'), 'result: 70');
console.log(translateRomanNumeral('MCC'), 'result: 1200');

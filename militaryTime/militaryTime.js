/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples: 

toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/

var obj = {
  '1': '13',
  '2': '14',
  '3': '15',
  '4': '16',
  '5': '17',
  '6': '18',
  '7': '19',
  '8': '20',
  '9': '21',
  '10': '22',
  '11': '23',
  '12': '00'
};

function toMilitary(time) {
  var result = '';

  if (time.includes('am')) {
    var x = time.slice(0, 2);
    time = time.replace('am', '');

    if (x === '12') {
      result = time.slice(2);
      result = obj[x] + result;
      return result
    }
    return time;
  } else if (time.includes('pm')) {
    time = time.replace('pm', '');
    result = time.slice(1);
    result = obj[time[0]] + result;
    return result;
  } else {
    return time;
  };
};

console.log(toMilitary("3:00pm"), 'result: 15:00');
console.log(toMilitary("9:15am"), 'result: 09:15');
console.log(toMilitary("12:00am"), 'result: 00:00');
console.log(toMilitary("04:00"), 'result: 04:00');
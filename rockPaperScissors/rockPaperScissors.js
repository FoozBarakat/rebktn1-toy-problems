/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = (number, arr, count) => {
  var obj = { '0': 'R',
              '1': 'P',
              '2': 'S'
            };

  var str = '';
  var arr = arr || [];
  var count = count || 0;

  for (var i = 0; i < number; i++) {
    var key = random();
    str += obj[key];
  }
  
  if (count === number) {
    return arr;
  }

  arr.push(str);
  count++;
  
  return rockPaperScissors(number, arr, count);
  
};

var random = () => {
  return Math.floor( Math.random() * 3); 
}

console.log( rockPaperScissors(5) );
console.log( rockPaperScissors(1) );
console.log( rockPaperScissors(0) );
console.log( rockPaperScissors(2) );
/*
Prime Tester
A prime number is an integer greater than 1 that has no divisors other than itself and 1. 
Write a function that accepts a number and returns true if it’s a prime number, false if it’s not. 
The grader is looking at the efficiency of your solution (number of operations) as well as correctness!

primeTester(2) // true
primeTester(1) // false

*/

function primeTester(n) {
  // if number = 1 => return false
  if (n === 1) return false;
  // loop starting from 2 until reach the number 
  for (var i = 2; i < n; i++) {
    // if number moduled by i = 0 => then the number is not prime => return false
    if (n % i === 0) return false;
  }
  // number is prime => return true 
  return true;
}

console.log(primeTester(2), "true");
console.log(primeTester(1), "false");
console.log(primeTester(7), "true");
console.log(primeTester(8), "false");
console.log(primeTester(13), "true");

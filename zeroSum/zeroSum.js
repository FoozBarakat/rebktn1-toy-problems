/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
<<<<<<< HEAD
*/

// linear 
var zeroSum = (array, count) => {
  var positive = {};
  var negitive = {};
  
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positive[array[i]] = array[i]; 
    } else {
      negitive[ Math.abs(array[i]) ] = array[i];
    }
  }
  
  for (var key in negitive) {
    if (positive[key] !== undefined) {
      return true;
    } 
  }
  
  return false;
  }
  
  console.log( zeroSum([ 1, 3, 2, -3 ]) ); // true
  console.log( zeroSum([ 5, 7, 2, 9 ]) ); // false

// not linear
var zeroSum = (array, count) => {

  var count = count || 0;
  
  for (var i = 0; i < array.length; i++) {
    //console.log(Math.abs(array[count]), Math.abs(array[i+1]))
    if( (count !== i) && (Math.abs(array[count]) === Math.abs(array[i])) ) {
      return true;
    };
  }
  
  if(count === array.length) {
    return false;
  }
  
  count++;
  
  return zeroSum(array, count);
  
  }
  
  //console.log( zeroSum([ 1, 3, 2, -3 ]) ); // true
  //console.log( zeroSum([ 5, 7, 2, 9 ]) ); // false
=======
*/
>>>>>>> 6ea89ad06c07a7995a7f734ca88922cc0b6bf387

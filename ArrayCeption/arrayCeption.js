// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0

var arrayception = (array, count) => {
  var count = count || 0;

  for (let i = 0; i < array.length; i++) {

    if (Array.isArray(array[i])) {
      arrayception(array[i], count);
      count++;
    } else if (array[i].length === 0) {
      count = 0;
    } else {
      count = 1;
    }
  }

  return count;
}

console.log(arrayception([[5], [[]]]), '2');
console.log(arrayception([10, 20, 30, 40]), '1');
console.log(arrayception([[10, 20], [[30, [40]]]]), '4');
console.log(arrayception([]), '0');
console.log(arrayception([[[]]]), '0');

/*
Given an array of arrays, return all elements in a single array. You must use recursion.

Hint: Use Array.isArray(elem) to see if something is an array.

Example: 
flatten([[1, 1], [4], 3, [3], 4, [6, 7]]) // [1, 1, 4, 3, 3, 4, 6, 7]
*/

// solution with recursion
function flatten(arr, result) {
  var result = result || [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i], result);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};

console.log(flatten([[1, 1], [4], 3, [3], 4, [6, 7]]), 'result: [1, 1, 4, 3, 3, 4, 6, 7]');


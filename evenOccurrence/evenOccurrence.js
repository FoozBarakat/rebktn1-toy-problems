/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/

var evenOccurrence = (arr) => {
  var obj = {};

    // loop in the array and count how many time the element apper in the array
    for (var  i = 0; i < arr.length; i++) {
      if(obj[arr[i]]) {
        obj[arr[i]]++;
      } else {
        obj[arr[i]] = 1;
      }
    }
  
    // loop in the array again and see is the element appers evenOccurrence
    for (var i = 0; i < arr.length; i++) {
      if (obj[arr[i]] % 2 === 0) {        
      return arr[i]
      };
    }
  
  
  return null;
}

console.log( evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]), '2' );
console.log( evenOccurrence([ 1, 2]), 'null' );
console.log( evenOccurrence([ "cat", "dog", "dig", "cat" ]), 'cat');
console.log( evenOccurrence([[1,2,3], [1,2], [1,2,3]]), '[1,2,3]' );
console.log( evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]), '{a:1, b:2}' );
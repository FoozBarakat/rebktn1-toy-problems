/*
You are given an array of numbers that each represent the height of an adjoining building. During torrential rain, water collects in the spaces between buildings. What is the maximum amount of water collected by the buildings represented by the array?

Explanation: An input of [3,0,3] can be visualized as such:

 __    __
|  |//|  |
|  |//|  |
|  |//|  |     
‾‾‾‾‾‾‾‾‾‾
The area of water in the above picture (and the result of calling volume([3,0,3])) is 3.

Challenge: do this in O(n) with < 2 pass-throughs

volume([ 3, 0, 3 ]) // 3
volume([ 1, 2, 3, 4, 0, 5, 3, 1 ]) // 4
volume([1,2,3,2,1]) // 0

*/

function volume(heights) {

  if (heights.includes(0)) {
    var index = heights.indexOf(0);
    var before = heights[index - 1];
    var after = heights[index + 1];

    if (index !== 0 && index !== heights.length - 1) {
      if (before < after) return before;
      else return after;
    }
  };

  return 0;
};

console.log(volume([3, 0, 3]), 'result: 3');
console.log(volume([1, 2, 3, 4, 0, 5, 3, 1]), 'result: 4');
console.log(volume([1, 2, 3, 2, 1]), 'result: 0');
console.log(volume([0, 2, 3, 2, 1]), 'result: 0');
console.log(volume([1, 2, 3, 2, 0]), 'result: 0');
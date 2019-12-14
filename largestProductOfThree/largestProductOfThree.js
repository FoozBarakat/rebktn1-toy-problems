/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible 
from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(array) {
    if (array.length < 3) {return 'the array length is less than 3'};
    var maxArr = [];
    var result = 1;

    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] *= -1;
        }
    }

    for (var i = 0; i < 3; i++) {
     var max = Math.max(...array);
     maxArr.push(max);
     var index = array.indexOf(max);
     array.splice(index, 1);
    }

    for (var i = 0; i < maxArr.length; i++) {
        result *= maxArr[i];
    }
    
    return result;
    
}

console.log( largestProductOfThree([ 2, 1, 3, 7 ]) );
console.log( largestProductOfThree([ 0, 2, 3 ]) );
console.log( largestProductOfThree([1, 4, -5, -2]) );
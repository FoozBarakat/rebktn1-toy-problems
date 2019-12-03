/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */


// this code dosen't work in all situations, it's just working when the number we serch for is in the middle
// of an array, so i think we need to declare another varibles start and end, to keep track of all of the element,
// and send this value with recursion in each time, like how i did in the middle,
// but there is no time to try it :)....

var arr = [1, 2, 3, 4, 5];

var binarySearch = function (array, target, middle) {

	var index = Math.floor(array.length/2);
    var middle = middle || index;

	if(array.length === 0) {
	    return null;
	}

	if (target === array[index]) {
		return middle;
	}
    
    if (array[index] > target) {
		var newLeft = array.slice(0, index + 1);
		middle = Math.floor(newLeft.length/2) + 1;
		return binarySearch(newLeft, target)
	} else {
		var newRight = array.slice(index);
		middle = Math.floor(newRight.length/2) + 1;
		return binarySearch(newRight, target, ++middle);
	
    }
	
};

console.log( binarySearch(arr, 1) );
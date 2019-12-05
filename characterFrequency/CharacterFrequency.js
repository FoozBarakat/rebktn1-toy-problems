/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/

var characterFrequency = function(str) {
	var object = {};
	var array = [];
	var result;

	// to check if char is in the object as key, if it's there add 1
	// else make it as a new key in object
	for (var i = 0; i < str.length; i++) {
		if ( !object[str[i]] ) {
			object[str[i]] = 1;
		} else {
			object[str[i]]++;
		}
	}

	// loop in the object and push the key and the value in the array
	for (var key in object) {
		array.push( [key, object[key]] );
	}

	// use sort to loop inside the array, and sort the array in descending order 
	result = array.sort( (a,b) => b[1] - a[1] );
	return result;
}

console.log( characterFrequency("aaabbc") );
console.log( characterFrequency("mississippi") );
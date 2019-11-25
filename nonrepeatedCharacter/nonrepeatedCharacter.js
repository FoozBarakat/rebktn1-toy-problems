/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string, count, found) {
 var found = found || [];
 var count = count || 0;
 var holdChar = string[count];

 for (var i = 0; i < string.length; i++) {
 	if (holdChar !== string[i]) {
 		found.push(true);
 	} else {
 		found.push(false);
 	}
 }

 if (found.length === string.length) {
 	for (var i = 0; i < found.length; i++) {
 		if (found[i] === true) {
 			return string[i];
 		}
 	}

 }

 return firstNonRepeatedCharacter(string, count++, found);

};

console.log( firstNonRepeatedCharacter('ABA') );
console.log( firstNonRepeatedCharacter('AACBDB') );

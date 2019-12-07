// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.

// it is still misiing two condition when  the char is equal to z i need to start agian from a.
// and the secound one that if after the move and it's is stopped on o or c or d or e.

var playWithString = function(str) {
	var newString = str.toLowerCase();
	var charObj = ascciNumber();
	var result = [];

	console.log(charOb);
	
	for (var i = 0; i < newString.length; i++) {
		if (newString[i] !== 'a' && newString[i] !== 'e' && newString[i] !== 'i' && newString[i] !== 'o' && newString[i] !== 'u') {
			if (newString[i] !== 'c' && newString[i] !== 'd') {
				console.log(charObj[i])
				result.push( charObj[newString[i]] + 9 );
			} else if (newString[i] === 'c') {
				result.push( charObj[newString[i]] - 1);
			} else if (newString[i] === 'd') {
				result.push( charObj[newString[i]] - 3)
			}
		}

		if (newString[i] === 'a' || newString[i] === 'i' || newString[i] === 'u') {
			result.push( charObj[newString[i]] - 5);
		} else if (newString[i] === 'e') {
			result.push( charObj[newString[i]] - 4)
		} else if (newString[i] === 'o') {
			result.push( charObj[newString[i]] - 1);
		}
	}
    
    var final = [];

	for (var i = 0; i < result.length; i++) {
        for (var key in charObj) {
            if (charObj[key] === result[i]) {
                final.push(key);
            }
        }
	}

	return final.join('');
}

console.log( playWithString('fooz') );


var ascciNumber = function() {
	var char = 'abcdefghijklmnopqrstuvwxyz';
	var letter = {};

	for (var i = 0, j = 97; i < char.length, j <= 122; i++, j++) {
		letter[char[i]] = j;
	}

	return letter;
}

console.log( ascciNumber() );
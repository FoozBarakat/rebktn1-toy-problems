/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  var hold = [];

  for (var i = 0; i < string1.length; i++) {
  	
  	for (var j = 0; j < string2.length; j++) {
  		
  		if (string1[i] === string2[j]) {
  			
  			if ( !hold.includes(string1[i]) && string1[i] !== " ") {
  				hold.push(string1[i]);	
  			}
  			
  		}
  	}
  }

  return hold.join("");
};

console.log( commonCharacters('acexiv ou', 'a egihobu') );

// Extra credit

/*var commonCharacters = function(string1, string2, string3) {
  var hold = [];

  if (string2.length > string3.length) {
      var len = string2.length;
  } else {
      var len = string3.length;
  }

  for (var i = 0; i < string1.length; i++) {
  	
  	for (var j = 0; j < len; j++) {
  		
  		if (string1[i] === string2[j] && string1[i] === string3[j]) {
  			
  			if ( !hold.includes(string1[i]) && string1[i] !== " ") {
  				hold.push(string1[i]);	
  			}
  			
  		}
  	}
  }

  return hold.join("");
};

console.log( commonCharacters('acefxiv ou', 'a egihobu', 'akjfsldf') ); */

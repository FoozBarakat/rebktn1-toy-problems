/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {
  var counter = 0;

  for (var i = 0; i < str.length; i++) {

    if( str[i] === '(' ) { counter++; } 
    if( str[i] === ')') { counter--; }
  }

  return counter === 0;
};

console.log( isBalanced("(x + y) - (4)") );
console.log( isBalanced("(((10 ) ()) ((?)(:)))") );
console.log( isBalanced("(50)(") );
console.log ( isBalanced("") );

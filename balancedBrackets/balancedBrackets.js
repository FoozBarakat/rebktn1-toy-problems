/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

var isBalanced = function(str) {
  var arr = [];

  for (var i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === ' {') {
      arr.push(str[i]);
    } 
    if (str[i] === ')') {
      var index = arr.indexOf('(');
      arr.splice(index, 1);
    }
    if (str[i] === ']') {
      var index = arr.indexOf('[');
      arr.splice(index, 1);
    }
    if (str[i] === '}') {
      var index = arr.indexOf('{');
      arr.splice(index, 1);
    }
  };

  if (arr.length) {
    return false;
  } 
  
  return true;
};

console.log( isBalanced("(x + y) - (4)") ); // true
console.log( isBalanced("(((10 ) ()) ((?)(:)))") ); // true
console.log( isBalanced("[{()}]") ); // true
console.log( isBalanced("(50)(")  ); // false
console.log( isBalanced("[{]}") ); // false
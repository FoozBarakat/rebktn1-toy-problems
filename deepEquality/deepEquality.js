/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

  
 var deepEquals = function(apple, orange, result) {
  var result = result || [];

  for (var key in apple) {
    
    if ( apple[key] === orange[key] && typeof apple[key] !== 'object') {
      result.push(true)
    } else if ( apple[key] !== orange[key] && typeof apple[key] !== 'object'){
      result.push(false);
    }

    if (typeof apple[key] === 'object') {
        deepEquals(apple[key], orange[key], result);
    }
  }

  if( result.includes(false) ) {
      return false;
  }

  return true;
};

console.log( deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}) );
console.log ( deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}) );
console.log ( deepEquals({a:1, b: {c:5}, d:7},{a:1, b: {c:3}}) );
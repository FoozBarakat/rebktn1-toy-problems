/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

 var allAnagrams = function(string) { 
  var holdStr = '';
  return helper(holdStr, string.split(''), string);
};

var helper = function(holdStr, arr, string, result) {
  var result = result || [];
  if (holdStr === string.length - 1) {
        result.push(holdStr);
        console.log(result)
  } else {
    for (var i = 0; i < arr.length; i++){
      holdStr += arr[i];
      console.log(holdStr)
      arr.splice(i, 1);
      console.log(arr)
      helper(holdStr, arr, string, result)
    }
  } 
}

console.log(allAnagrams('abc'))
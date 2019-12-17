/*
 * Write Compose and Pipe functions.
 * 
 * Step 1: Implement the function Compose: 
 *
 * Compose should return a function that is the composition of a list of
 * functions of arbitrary length.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view compose as moving right to left through its arguments.
 *
 * Compose Example:
 *   var greet = function(name){ return 'hi: ' + name;}
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 * 
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 * 
 * Pipe Example:
 *  var add2 = function(number){ return number + 2; }
 *  var multiplyBy3 = function(number){ return number * 3; }
 *  pipe(add2, multiplyBy3)(5) // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
 */

'use strict';
// here i think i should solve this using es6 and Rest parameters, i figure that out afetr 
// solving the pipe, but there is no time :)
var compose = function(fun1, fun2) {
    var value = fun1();
    return (val) => {
        value = value.replace(undefined, '');
        return value + fun2(val)} ;
};

var greet = function(name){ return 'hi: ' + name;}
var exclaim = function(statement) { return statement.toUpperCase() + '!';}
var welcome = compose(greet, exclaim);
console.log( welcome('phillip') );

//..........................................

// using es6 and Rest parameters
var pipe = (...fun) => {
    // returning a function that have the val as parameter
    return (val) => {
        // looping throw every parameter and change the value of val depinding on the function
        fun.forEach(f => {
            val = f(val);
        });
        // return the final val
        return val;
    }
};

var add2 = function(number){ return number + 2; }
var multiplyBy3 = function(number){ return number * 3; }
console.log( pipe(add2, multiplyBy3)(5) );
console.log( pipe(add2, multiplyBy3, multiplyBy3)(5) );

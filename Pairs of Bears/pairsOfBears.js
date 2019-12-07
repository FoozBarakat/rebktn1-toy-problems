/*

In order to prove it's success and gain funding, the wilderness zoo needs to prove to environmentalists that it has x 
//number of mating pairs of bears.

You must check within string (s) to fid all of the mating pairs, and return a string containing only them. 
//Line them up for inspection.

Rules: Bears are either 'B' (male) or '8' (female), Bears must be together in male/female pairs 'B8' or '8B', 
//Mating pairs must involve two distinct bears each ('B8B' may look fun, but does not count as two pairs).

Return an array containing a string of only the mating pairs available. e.g:

'EvHB8KN8ik8BiyxfeyKBmiCMj' ---> 'B88B' (empty string if there are no pairs)

and true if the number is more than or equal to x, false if not:

(6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false];

x will always be a positive integer, and s will never be empty

- regular expression is not allow 


*/

var zoo = function(x, str) {
	if ( x === undefined || str === undefined ){
		return 'error, you have to enter a number and string';
	}

	var resultStr = '';
	var count = 0;
	var bool = false;

	for (var i = 0; i < str.length; i++) {
		if ( (str[i] + str[i+1] === '8B') || (str[i] + str[i+1] === 'B8') ){
			resultStr += str[i] + str[i+1];
		} 
	}

	for (var i = 0; i < resultStr.length; i++) {
		if ( resultStr[i] === '8' ) {
			count++;
		}
	}

	if (count >= x) {
		bool = true;
	}


	return [resultStr, bool];
}

console.log( zoo(6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') );
console.log( zoo(2, 'EvHB8KN8ik8BiyxfeyKBmiCMj') );


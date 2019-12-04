// Coding decimal numbers with factorials is a way of writing out numbers in a base system that depends on factorials, rather than powers of numbers.

// In this system, the last digit is always 0 and is in base 0!.
// The digit before that is either 0 or 1 and is in base 1!. The digit before that is either 0, 1, or 2 and is in base 2!.

// More generally, the nth-to-last digit is always 0, 1, 2, ..., or n and is in base n!.
// Example :

// decimal number 463 is coded as "341010":

// 463 (base 10) = 3×5! + 4×4! + 1×3! + 0×2! + 1×1! + 0×0!

// If we are limited to digits 0...9 the biggest number we can code is 10! - 1.

// So we extend 0..9 with letters A to Z. With these 36 digits we can code up to

// 36! − 1 = 37199332678990121746799944815083519999999910 (base 10)

// We will code two functions. The first one will code a decimal number and return a string with the factorial representation : dec2FactString(nb)

// The second one will decode a string with a factorial representation and produce the decimal representation : factString2Dec(str).

// Given numbers will be positive.

var dec2FactString = function(nb) {
	var str = "" + nb;
	var len = str.length - 1;
	var result = '';
	for (var i = 0; i < str.length; i++) {
		result += "" + str[i] + "*" + "" + len + "!" + "+";
		--len;
	}
	//console.log(result);
	return result.slice(0, result.length-1);
}

console.log( dec2FactString(341010) );

var factString2Dec = function(str) {
	var arrFac = [];
	var arrMul = [];
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] === "!") {
			var hold = factorial( str[i-1] );
			arrFac.push(hold);
		}
	}
	console.log(arrFac);

	for (var i = 0; i < str.length; i++) {
		if (str[i] === '*') {
			var hold = str[i-1] * arrFac[count];
			count++;
			arrMul.push(hold);
		}
	}
	console.log( arrMul );

	var sum = 0;

	for (var i = 0; i < arrMul.length; i++) {
		sum += arrMul[i];
	}

	return sum;
}


console.log( factString2Dec( dec2FactString(341010) ) );


var factorial = function(num) {
	var result = 1;
	for (var i = 1; i <= num; i++) {
		result *= i;
	}
	return result;
}
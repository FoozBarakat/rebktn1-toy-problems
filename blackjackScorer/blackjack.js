/* Complete the function that determines the score of a hand in the card game Blackjack (aka 21).

The function receives an array of strings that represent each card in the hand ("2", "3", ..., "10", "J", "Q", "K" or "A") and should return the score of the hand (integer).
Scoring rules:

Number cards count as their face value (2 through 10). Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.

Return the highest score of the cards that is less than or equal to 21. If there is no score less than or euqal to 21 return the smallest score more than 21.
Examples

var hand1 = ["A"]                           ==>  11
var hand2 = ["A", "J"]                      ==>  21
var hand3 = ["A", "10", "A"]                ==>  12
var hand4 =["5", "3", "7"]                 ==>  15
var hand5 =["5", "4", "3", "2", "A", "K"]  ==>  25 */


// i don't really get the game and how it works
function play(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
			if(array[i] === "A") {
				for (var j = 0; j < array.length; j++) {
					var a = [];
					if (array[j] === "J" || array[j] === "Q" || array[j] === "KQ") {
						a.push(false);
					} else { 
						a.push(true);
					}
				} 
				if (a.includes(true) ) {
						var val = 1;
					} else {
						var val = 11;
					}
				sum += val;
			} else if (array[i] === "J") {
				sum += 10;
			} else if (array[i] === "Q") {
				sum += 10;
			} else if (array[i] === "K") {
				sum += 10;
			} else {
			    sum += parseInt(array[i]);
			}
		}
	
	return sum;
}

var hand1 = ["A"]                          
var hand2 = ["A", "J"]                     
var hand3 = ["A", "10", "A"]                
var hand4 =["5", "3", "7"]                 
var hand5 =["5", "4", "3", "2", "A", "K"]

console.log( play(hand5) )
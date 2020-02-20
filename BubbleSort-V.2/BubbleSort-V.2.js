// Bubble sort is considered the most basic sorting algorithm in Computer Science.
// It works by starting at the first element of an array and comparing it to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.

// NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

// You've got Helpers!
// myHelper(x, y)

// Examples
// input: [ 20, -10, -10, 2, 4, 299 ]
// Output:	[ -10, -10, 2, 4, 20, 299 ]


<<<<<<< HEAD
function bubbleSort(input) {
    var arr = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] > input[i + 1]) {
            var hold = input[i];
            input[i] = input[i + 1];
            input[i + 1] = hold;
        }
    };

    for (let j = 0; j < input.length - 1; j++) {
        if (input[j] <= input[j + 1]) {
            arr.push(true);
        } else {
            arr.push(false);
        }
    }

    if (arr.includes(false)) {
        bubbleSort(input);
    }

    return input;
};

console.log(bubbleSort([20, -10, -10, 2, 4, 0, 299, 1, 500, -1]), "result: [ -10, -10, -1, 0, 1, 2, 4, 20, 299, 500 ]");


=======






[1, 2, 4, 3]


const bubbleSort = (input, index = 0) => {
    if (index === input.length - 1) {
      return input;
    }
    
    function inner (input, index = 0) {
      if (index === input.length - 1) {
        return;
      }
      if (input[index] > input[index + 1]) {
        let temp = input[index + 1];
        input[index + 1] = input[index];
        input[index] = temp;
      }
      inner(input, ++index)
    }

    inner(input);
    return bubbleSort(input, ++index);
  }

  console.log(bubbleSort([20, -10, -10, 2, 4, 299]))
>>>>>>> 94a97edeb556c240b870788df4b3608b75e8bfab

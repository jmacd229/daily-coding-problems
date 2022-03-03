// https://www.educative.io/courses/grokking-the-coding-interview/RMBxV6jz6Q0
const dutch_flag_sort = function (arr) {
	let lowIndex = 0; // All numbers above lowIndex are zeros
	let highIndex = arr.length - 1; // All numbers below highIndex are twos
	for (let i = 0; i <= highIndex; i++) {
		// If we find a zero then we should swap it with our current lowIndex
		if (arr[i] === 0) {
			[arr[lowIndex], arr[i]] = [arr[i], arr[lowIndex]];
			// Increment lowIndex because we now know that all numbers prior are zeros
			lowIndex++;
		}
		// If we find a two, we do the same with the high index
		else if (arr[i] === 2) {
			[arr[highIndex], arr[i]] = [arr[i], arr[highIndex]];
			highIndex--;
			// We have to decrement i because we want to reprocess the element that was swapped with the highIndex
			// We don't have to do this with lowIndex because we started processing from i=0 so we already know everything that everything being swapped from lowIndex
			// Is either a 0 or a 1
			i--;
		}
	}
	console.log(arr);
};

dutch_flag_sort([2,1,0,2,2]);

/*
Input: [0, 1, 0, 2, 2]

21022
L   H
^

21022
L   H 
 ^

01022
L   H 
  ^

01022
 L  H 
   ^



Input: [2, 2, 0, 1, 2, 0]

220120
L    H
^

020122
L   H 
^

020122
 L  H 
 ^

020122
 L H 
 ^

010222
 LH 
 ^
*/
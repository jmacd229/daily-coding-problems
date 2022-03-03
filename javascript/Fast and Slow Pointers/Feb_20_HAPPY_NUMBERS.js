/** https://leetcode.com/problems/happy-number/
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	if(n === 1){
		return true;
	}
	let tortoise = n;
	let hare = n;
	do {
	tortoise = calcPow(tortoise);
	hare = calcPow(calcPow(hare));
	// The hare is faster so if it gets to 1 then we know we have reached the end
	if(hare === 1){
		return true;
	}
	} while (tortoise !== hare) // If the two pointers are ever equal, we have created a loop
	return false;
};

// Calculates the summation of squaring each digit in the number
const calcPow = n => {
	const number = n.toString();
	let result = 0;
	for (let i = 0; i < number.length; i++) {
		result += Math.pow(Number(number[i]), 2);
	}
	return result;
}

console.log(isHappy(0));

/*
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

*/
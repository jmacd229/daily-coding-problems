/**https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	let startIndex = 0;
	let endIndex = numbers.length - 1;
	while (startIndex < endIndex) {
		const currentValue = numbers[startIndex] + numbers[endIndex];
		if (currentValue === target) {
			return [startIndex + 1, endIndex + 1];
		}
		if (currentValue > target) {
			endIndex--;
		} else {
			startIndex++;
		}
	}
};

console.log(twoSum([2, 7, 11, 15], 9));

/*
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
*/
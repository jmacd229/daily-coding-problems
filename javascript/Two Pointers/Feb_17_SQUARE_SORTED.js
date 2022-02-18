/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
	let rightIndex = nums.findIndex(num => num >= 0);
	// Array is fully positive
	if (rightIndex === 0) {
		return nums.map(num => Math.pow(num, 2));
	}
	// Array is fully negative
	if (rightIndex === -1) {
		return nums.map(num => Math.pow(num, 2)).reverse();
	}
	// leftIndex will be our -'ve # closest to 0 and rightIndex will be our +'ve number closest to 0 (or = 0)
	let leftIndex = rightIndex - 1;
	let result = [];
	let leftResult = Math.pow(nums[leftIndex], 2);
	let rightResult = Math.pow(nums[rightIndex], 2);
	// We use an OR operator here because we only want to break after the whole array is traversed
	while (rightIndex < nums.length || leftIndex >= 0) {
		// If we've run out of numbers on the right hand side then we just need to keep pushing the results from the left hand side
		// OR if the left hand side's result is less than the right we should also push it
		if (rightIndex >= nums.length || leftResult < rightResult) {
			result.push(leftResult);
			leftResult = Math.pow(nums[--leftIndex], 2);
		} else { // Just the inverse of the above condition
			result.push(rightResult);
			rightResult = Math.pow(nums[++rightIndex], 2);
		}
	}
	return result;
};

console.log(sortedSquares([-4,-3,-2,-1, 0, 3]));

/*
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

Input: nums = [-7,-3,4,11]
Output: [9,16,49,121]

start from the middle and work out?
*/
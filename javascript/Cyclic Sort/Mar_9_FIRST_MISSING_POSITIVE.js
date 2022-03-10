/** https://www.educative.io/courses/grokking-the-coding-interview/R1GXQ071GQ0
 * https://leetcode.com/problems/first-missing-positive/
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
	let i = 0;
	while (i < nums.length) {
		const j = nums[i] - 1;
		// swap all +'ve numbers that are less than or equal to the length of the array (ie. sort from 1-7 if the array has 7 elements, but ignore -1 or 8)
		if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[j]) {
			[nums[i], nums[j]] = [nums[j], nums[i]];
		} else {
			i++;
		}
	}

	// The first number out of place is at the index where we have a missing number so return it
	for (i = 0; i < nums.length; i++) {
		if (!nums[i] || nums[i] !== i + 1) {
			return i + 1;
		}
	}

	return nums[nums.length - 1] + 1;
};

console.log(firstMissingPositive([1,1]));
/*
Input: nums = [3,4,-1,1]
Output: 2
1 -1 3 4


Input: [-3, 1, 5, 4, 2]
Output: 3
1, 2, -3, 4, 5
*/
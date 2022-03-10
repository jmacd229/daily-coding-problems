/** https://www.educative.io/courses/grokking-the-coding-interview/q2LA7G0ANX0
 * @param {number[]} nums
 * @return {number}
 */
const find_first_k_missing_positive = function (nums, k) {
	let i = 0;
	const result = [];
	while (i < nums.length) {
		const j = nums[i] - 1;
		// swap all +'ve numbers that are less than or equal to the length of the array (ie. sort from 1-7 if the array has 7 elements, but ignore -1 or 8)
		if (nums[i] > 0 && nums[i] !== nums[j]) {
			[nums[i], nums[j]] = [nums[j], nums[i]];
		} else {
			i++;
		}
	}

	// Any number out of place is at the index where we have a missing number so add it to our result array
	for (i = 0; i < nums.length && result.length < k; i++) {
		if (!nums[i] || nums[i] !== i + 1) {
			result.push(i + 1);
		}
	}

	// starting from either the end of our missing number array or the end of our actual number array
	// Add enough numbers to get to k to our result and then return
	i = Math.max(nums[nums.length - 1], result[result.length - 1]) + 1;
	for (i; result.length < k; i++) {
		result.push(i);
	}
	return result;
};

console.log(find_first_k_missing_positive([2,3,4],3));
/*
Input: nums = [3,4,-1,1]
Output: 2
1 -1 3 4


Input: [-3, 1, 5, 4, 2]
Output: 3
1, 2, -3, 4, 5
*/
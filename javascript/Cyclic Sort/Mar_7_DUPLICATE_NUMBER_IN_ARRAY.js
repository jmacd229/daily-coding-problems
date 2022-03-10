/** https://www.educative.io/courses/grokking-the-coding-interview/3wEkKy6Pr9A
 * @param {number[]} nums
 * @return {number}
 */
 const find_duplicate = function(nums) {
	for (let i = 0; i < nums.length;) {
		// Swap numbers with the number at the index corresponding to their value
		if (nums[i] !== i + 1) {
			// If the number already exists then return it;
			if (nums[i] === nums[nums[i] - 1]) {
				return nums[i];
			} else {
				const swap = nums[i];
				nums[i] = nums[swap - 1];
				nums[swap - 1] = swap;
			}
		} else {
			i++;
		}
	}
	return -1;
}

const find_corrupt_numbers = function (nums) {
	let i = 0;
	while (i < nums.length) {
		const j = nums[i] - 1;
		// Swap the numbers if they're not identical
		if (nums[i] != nums[j]) {
			[nums[i], nums[j]] = [nums[j], nums[i]];
		} else {
			i++;
		}
	}
	// Traverse one more time and return the value at the wrong index
	for (i = 0; i < nums.length; i++) {
		if (nums[i] !== i + 1) {
			return [nums[i], i + 1];
		}
	}
	return -1;
};

console.log(find_corrupt_numbers([3, 1, 2, 3, 6, 4]))


/*
Input: [3, 1, 2, 3, 6, 4]
Output: [3, 5]
Explanation: '3' is duplicated and '5' is missing.
*/
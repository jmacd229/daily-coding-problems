/** https://leetcode.com/problems/find-all-duplicates-in-an-array/
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
	for (let i = 0; i < nums.length;) {
		// Check to make sure the current index is not 0 or undefined otherwise we move to the next number
		if (nums[i] && nums[i] > 0) {
			// we're always going to setting the value of the current number to the value at the index of it
			// ie. when nums[i] = 7 we'll always swap it with whatever is in the 7th spot 
			const swap = nums[i];
			nums[i] = nums[swap - 1];
			// if the number we swapped it with was 0 that means we've already found this number before and therefor it's a duplicate
			if (nums[swap - 1] === 0) {
				// We set the number to negative so we know it is a duplicate and we don't re-process it
				nums[swap - 1] = swap * - 1;
				// Since we need to place something in the spot we just swapped, we set it to undefined
				nums[i] = undefined;
			} else {
				// If this is the first time we're swapping the number we just place a 0 in the spot
				nums[swap - 1] = 0;
			}
		} else {
			i++;
		}
	}
	// At the end we should have an array of -'ve numbers representing the duplicates
	return nums.filter(Boolean).map(Math.abs);
};

console.log(findDuplicates([1]))

/*
112
012
1undefined2

*/
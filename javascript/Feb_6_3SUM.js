/** https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

	// Sorting the array allows us to know where duplicates will be, and to wokr through it sequentially
	nums.sort((a, b) => a - b);
	let result = [];

	// We are trying to find triplets, i-j-k, i will be the first number of our triplet
	// NOTE: the extra condition in the for loop, breaks early if i is +'ve since we can't have 3 positive numbers make a 0
	for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
		// If our first number is the same as the last one we just calculated, we should continue so that we don't end up with a duplicate
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}
		// j our 2nd comparison number is always going to start at 1 greater than our current first comparison number
		let j = i + 1;
		// k will always start at the end of the array and move inwards
		let k = nums.length - 1;
		// Since this array is sorted, we can move these numbers in towards eachother to increse/decrease the sum
		while (j < k) {
			const currentValue = nums[i] + nums[j] + nums[k];
			// We decrease our last number to try and decrease the sum
			if (currentValue > 0) {
				k--;
			// And likewise, do inversely to try and increase the sum
			} else if (currentValue < 0) {
				j++
			}
			else {
				// We have found a set of three that sums to 0
				result.push([nums[i], nums[j], nums[k]]);
				// Only choose the next j value that is not equal to the current one, once again to avoid duplicates
				do {
					j++;
				} while (j < nums.length && nums[j] == nums[j - 1])
			}
		}
	}
	return result;
};
threeSum([2, -4, -1, -1, 0, 1]).forEach(result => console.log(result));






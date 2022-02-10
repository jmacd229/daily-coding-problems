/**https://leetcode.com/problems/minimum-size-subarray-sum/
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	let currentSum = nums[0];
	let currentLength = 1;
	let minLength = 0;
	let startIndex = 0;
	let endIndex = 0;
	while (startIndex < nums.length) {
		// If we have found a sum that hits our target
		if (currentSum >= target) {
			// We can't have an array smaller than 1, we can return immediately
			if (currentLength === 1) {
				return 1;
			}
			// minLength is 0 when unset, so if it's 0 or greater than our current length we can store it
			if (minLength === 0 || currentLength < minLength) {
				minLength = currentLength;
			}
			// The only way to check if we can have a smaller subarray is to now make the window smaller by increasing the start index
			currentSum -= nums[startIndex++];
			currentLength--;
		} else {
			// If we haven't hit the target sum yet, we should increase the size of the array to try and hit it by incrementing our end index
			if (endIndex < nums.length) {
				currentSum += nums[++endIndex];
				currentLength++;
			} else { // If we're at the end of the array, we can only increase startIndex
				if(currentSum < target){
					break; // We can't increase the number any more so might as well break early at this point to save time
				}
				currentSum -= nums[startIndex++];
				currentLength--;
			}
		}
	}

	return minLength;
};

console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
/** https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let currentTotal = nums[0];
	let maxTotal = nums[0];
	for (let i = 1; i < nums.length; i++) {
		// If our currently calculated total is a negative then it only subtracts from our sum, not adds
		// Therefore we can just reset our total by shifting the start of our sum to the current number
		// ie. -3 -2 1 <- if we get to the 1, our current sum is -5 which doesn't do us any good
		// So we set our total to the 1 and ignore the entire beginning
		if (currentTotal < 0) {
			currentTotal = nums[i];
		} else {
			// If we have a positive current total then we add the next number to out total
			currentTotal += nums[i];
		}
		// If we've now calculated a total that's greater than our previous total, save it to be returned
		if (currentTotal > maxTotal) {
			maxTotal = currentTotal;
		}
	}
	return maxTotal;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


/** Accidentally returned the array instead of the sum
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArrayReturnArray = function (nums) {
	let maxSub = [nums[0]];
	let currentTotal = nums[0];
	let maxTotal = nums[0];
	let maxEnd = 0;
	for (let i = 1; i < nums.length; i++) {
		if (currentTotal < 0) {
			maxSub = [nums[i]];
			currentTotal = nums[i];
		} else {
			maxSub.push(nums[i]);
			currentTotal += nums[i];
		}
		if (currentTotal > maxTotal) {
			maxTotal = currentTotal;
			maxEnd = maxSub.length;
		}
	}
	return maxSub.splice(0, maxEnd);
};
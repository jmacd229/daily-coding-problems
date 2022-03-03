/** https://leetcode.com/problems/subarray-product-less-than-k/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
	let result = 0;
	let product = 1;
	let leftIndex = 0;
	for (let rightIndex = 0; rightIndex < nums.length; rightIndex++) {
		product *= nums[rightIndex]; // The current product

		// If the current product is greater than our target, we need to move our left index up
		while (product >= k && leftIndex < nums.length) {
			product /= nums[leftIndex];
			leftIndex++;
		}

		// At this point we know we have a window where all of the numbers in it have a product < k
		// Therefore we can say that there will be the difference + 1 (to account for the single number at rightIndex) possible subarrays
		/* ie.
		[10,5,2,6], k = 100
		leftIndex = 1;
		rightIndex = 3;
		At this point we know rightIndex >= leftIndex AND product < k
		Therefore we can say every subarray between nums[1] and nums[3] containing nums[rightIndex] is < k
		therefore we add 3 to our result ([6],[2,6],[5,2,6])
		NOTE: that [5,2],[5],[2] are also subarrays inside this window, but they would have been calculated previously when leftIndex = 1 and rightIndex = 2
		*/
		if (rightIndex >= leftIndex) {
			result += (rightIndex - leftIndex) + 1;
		}
	}
	return result;
};

console.log(numSubarrayProductLessThanK([1,2,3], 0));

/** https://www.educative.io/courses/grokking-the-coding-interview/RMV1GV1yPYz
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayProductLessThanK = function (nums, k) {
	const result = [];
	let product = 1;
	let rightIndex = nums.length - 1;

	// We go backwards as opposed to the one above as this allows us to traverse our inner loop forwards which means the tempArray will contain the subarray in the right order
	for (let leftIndex = nums.length - 1; leftIndex >= 0; leftIndex--) {
		product *= nums[leftIndex]; // The current product

		// If the current product is greater than our target, we need to move our left index up
		while (product >= k && rightIndex >= 0) {
			product /= nums[rightIndex];
			rightIndex--;
		}

		// Here we do the same thing as the one where we counted, except we have to loop through and add all of the arrays
		const tempArray = [];
		for (let i = leftIndex; i <= rightIndex; i++) {
			tempArray.push(nums[i]);
			result.push(tempArray.slice());
		}
	}
	return result;
};


subarrayProductLessThanK([10, 5, 2, 6], 100).forEach(array => console.log(array));
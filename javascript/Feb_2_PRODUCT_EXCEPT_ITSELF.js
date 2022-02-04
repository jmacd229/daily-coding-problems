/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	const result = [1];

	let prefix = 1; // This variable keeps track of the current value of the prefix values
	// prefix values are the multiplications of all the numbers before the current one
	// it is initialized to 1 because the first element in the array does not have values before it, therefore it would not have a prefix
	// 1 is neutral since it doesn't affect multiplication

	// Calculate prefix array
	// ======================
	// Go through every element starting at 1 (not 0) and calculate the multiplication of all elements before it
	for (let i = 1; i < nums.length; i++) {
		// since each iteration of the array will contain the multiplication of the previous prefix, we store it in a variable to be reused through each iteration
		prefix = prefix * nums[i - 1];
		result.push(prefix); // store it in the index so that we know the prefix value for each position (ie. results[4] will contain the multiplication of the 4 elements before it)
	}

	let postfix = 1;
	// postfix values are the multiplications of all the numbers after the current one. It is initialized to 1 for the same reason as the prefix

	// Calculate prefix array
	// ======================
	// Essentially iterate the same way but do it in reverse
	for (let i = nums.length - 2; i >= 0; i--) {
		postfix = postfix * nums[i + 1];
		result[i] = result[i] * postfix; // the only difference is that now instead of just pushing the post/prefix into the array we are multiplying it by the value already there as calculated in the last step
	}

	return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));

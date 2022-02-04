/**
 * https://leetcode.com/problems/two-sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	// Create hashmap of the remainders for each index in the array
	const remainders = {};
	for (let i = 0; i < nums.length; i++) {
		// If the hashmap contains the current number, then the value stored in the map is the index where its inverse is stored
		if (remainders[nums[i]] !== undefined) {
			return [i, remainders[nums[i]]]
		}
		// If the hashmap does not contain the current number, then add the remainder as a key in the map with the value being the current index
		remainders[target - nums[i]] = i;
	}
};

console.log(twoSum([2,7,11,15], 9));
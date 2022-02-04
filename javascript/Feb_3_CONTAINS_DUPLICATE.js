/**https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	const map = {};
	for (let i = 0; i < nums.length; nums++) {
		if (map[nums[i]] !== undefined) {
			return true;
		}
		map[nums[i]] = true;
	}
	return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
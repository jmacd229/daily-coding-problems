/** https://leetcode.com/problems/4sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
	nums.sort((a, b) => a - b);
	let i = 0;
	let result = [];
	while (i < nums.length - 3) {
		// Do 3SUM for the first n-3 numbers with the currently selected number being the target
		result = result.concat(threeSum(nums.slice(i + 1), nums[i], target));
		// increment i making sure to skip duplicates
		do {
			i++;
		} while ((nums[i] === nums[i - 1]) && i < nums.length - 3)
	}

	return result;
};

var threeSum = function (nums, currentNum, targetNum) {
	// Our target value is the parent target, minus the current index of the parent
	const targetValue = targetNum - currentNum;
	// i is the first of our triplet
	let i = 0;
	// Left and right inc/dec to find out target value
	let leftIndex = 1;
	let rightIndex = nums.length - 1;
	let result = [];
	// If i === n - 2 then we know that there's only one other number in the array and therefore cannot make a triplet
	while (i < nums.length - 2) {
		const sum = nums[leftIndex] + nums[rightIndex];
		// If our left and right index have met, that means there's no possible triplet with the current i value
		if (leftIndex === rightIndex) {
			// increase i until there's not a duplicate
			do {
				i++;
			} while ((nums[i] === nums[i - 1]) && i < nums.length - 2)
			// Reset the left and right index for the new i value
			leftIndex = i + 1;
			rightIndex = nums.length - 1;
		}
		else if (sum <= targetValue - nums[i]) {
			// If we have found the target then we push it into our result array
			if (sum === targetValue - nums[i]) {
				result.push([currentNum, nums[i], nums[leftIndex], nums[rightIndex]]);
			}
			// Whether we found the target or are < the target, we want to move our left index up until a non-duplicate is found
			do {
				leftIndex++;
			} while ((nums[leftIndex] === nums[leftIndex - 1]) && leftIndex < rightIndex)
		} else {
			// If we're over our target then we can decrease the right index
			do {
				rightIndex--;
			} while ((nums[rightIndex] === nums[rightIndex + 1]) && leftIndex < rightIndex)
		}
	}
	return result;
};

fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0);



/*
[-2, -1, 0, 0, 1, 2]

This is just recursive 3SUM? Maybe??
*/
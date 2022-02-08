/** https://leetcode.com/problems/missing-number/
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function (nums) {
	let missing = nums.length; // We default to the length of the array being the missing number
	// This is because an already sorted array will not execute any sorting
	for (let i = 0; i < nums.length; i++) {
		// If the current number we're looking at is not equal to its index
		// then put the current number at its respective index and swap the number that was there into the current spot
		while (nums[i] !== i){
			// If we swap undefined into the current spot then we can't keep swapping so we mark this one as the missing number and move on
			if(nums[i] === undefined){
				missing = i;
				// We move on because we can't know that the number is truly missing until the whole array is sorted
				// There might not be a number at the index we're looking for, but that's only because the array is still unsorted
				break;
			}
			let swap = nums[i];
			nums[i] = nums[nums[i]];
			nums[swap] = swap;
		}
	}
	return missing;
};
  console.log(missingNumber([1,6,4,2,3,5,7,0,9]));

  /*
6,1,4,2,3,5,7,0,9
7,1,4,2,3,5,6,0,9
0,1,4,2,3,5,6,7,9
0,1,3,2,4,5,6,7,9
0,1,2,3,4,5,6,7,9
0,1,2,3,4,5,6,7,undefined,9
  */
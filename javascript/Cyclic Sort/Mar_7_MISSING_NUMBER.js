/** https://leetcode.com/problems/missing-number/
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
	 let missingIndex = nums.length;
	for (let i = 0; i < nums.length;) {
		// If the number at the current index is undefined then that means we haven't found a number to swap into it yet
		// The number will either appear later in the array, or if it doesn't then this will be the last time we encounter undefined
		// Therefore, we should always update missingIndex to the index of the currently undefined space
		if(nums[i] === undefined) {
			missingIndex = i;
			i++;
		}
		// Swap numbers with the number at the index corresponding to their value
		else if ( nums[i] !== i ) {
			const swap = nums[i];
			nums[i] = nums[swap];
			nums[swap] = swap;
		} else {
			i++;
		}
	}
	return missingIndex;
}


console.log(`${missingNumber([9,6,4,2,3,5,7,0,1])}`)

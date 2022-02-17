/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	let leftIndex = 0;
	let rightIndex = 1;
	while ( rightIndex < nums.length) {
		// If the two numbers we're comparing are different and defined, then we should move up our left index
		if (nums[leftIndex] !== undefined && nums[leftIndex] !== nums[rightIndex]) {
			leftIndex++;
			// If this makes our indexes equal, then we should bump up our right index
			if(leftIndex === rightIndex){
				rightIndex++;
			}
		} else {
			// If our left index is undefined then we can swap it with whatever is in our right index and increment our right index
			if (nums[leftIndex] === undefined) {
				nums[leftIndex] = nums[rightIndex];
			}
			// If the above conditional is not true, we still want to set the right element to undefined because that means that
			// the numbers at both indexes are equal, and therefore it's a duplicate
			nums[rightIndex] = undefined;
			rightIndex++;
		}
	}
	// We should have iterated our left index to the end of the array if it is fully sorted, therefore it should hold our array length
	return leftIndex + 1;
};

console.log(removeDuplicates([1,2,3]));
// 0, 0, 0, 1, 1, 1, 2, 2, 2
// 0, u, 0, 1, 1, 1, 2, 2, 2
// 0, u, u, 1, 1, 1, 2, 2, 2
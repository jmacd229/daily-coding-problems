/** https://leetcode.com/problems/circular-array-loop/
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums) {
	// Can't have a cycle > 1 with less than two numbers
	if (nums.length < 2) {
		return false;
	}
	// Used to keep track of if the current cycle is moving forwards or backwards
	let isBackwards;
	// Used to move to the next element
	const incrementPointer = pointer => {
		// Getting the mod value tells us how many sequences it will move after looping the whole array
		const remainder = nums[pointer] % nums.length;
		// If it is not moving any sequences then we have found an infinite single element loop so should break from our loop
		if(remainder === 0) {
			return -1;
		}
		// Otherwise we move our sequence and loop around if we go over/under the bounds of the array
		pointer += remainder;
		if (pointer >= nums.length) {
			pointer -= nums.length;
		}
		if (pointer < 0) {
			pointer += nums.length;
		}
		// If the new number we land on goes in the opposite direction of our current loop, we need to break
		if (isBackwards && nums[pointer] > 0 || !isBackwards && nums[pointer] < 0) {
			return -1;
		}
		return pointer;
	}

	// Increment through each number in the array
	for (let i = 0; i < nums.length; i++) {
		// If we've set an element to 0, that means it was already part of an invalid loop
		if (nums[i] === 0) {
			continue;
		}
		let slowPointer = i;
		let fastPointer = i;
		// Keep track of the direction of the current loop we're assessing
		isBackwards = nums[i] < 0;
		do {
			// Move our fast pointer up twice
			fastPointer = incrementPointer(fastPointer);
			// If we've identified that we're in an invalid loop, break and try the next number
			if (fastPointer === -1) {
				break;
			}
			fastPointer = incrementPointer(fastPointer);
			if (fastPointer === -1) {
				break;
			}
			// Increment our slow pointer and set the last index it was on to 0 to indicate that it's a loop we've already traversed
			let previousSlowPointer = slowPointer;
			slowPointer = incrementPointer(slowPointer);
			nums[previousSlowPointer] = 0;
			// If we hit a 0 that means we have found a loop, or if our two pointers meet
			if (nums[fastPointer] === 0 || slowPointer === fastPointer) {
				return true;
			}
		} while (slowPointer !== i)
	}
	return false;
};

console.log(circularArrayLoop([-2,-3,-9]));

/*
Input: nums = [2,-1,1,2,2]
Output: true
Explanation:
There is a cycle from index 0 -> 2 -> 3 -> 0 -> ...
The cycle's length is 3.


[6,1,2]
*/
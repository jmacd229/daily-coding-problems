/*
 * @param {number[]} nums
 * @return {number}
 */
var find_missing_numbers = function (nums) {
	let missingIndeces = [];
	for (let i = 0; i < nums.length;) {
		// Swap numbers with the number at the index corresponding to their value
		if (nums[i] !== undefined && nums[i] !== i + 1) {
			// If the number already exists then just set it to undefined and move on
			if (nums[i] === nums[nums[i] - 1]) {
				nums[i++] = undefined;
			} else {
				const swap = nums[i];
				nums[i] = nums[swap - 1];
				nums[swap - 1] = swap;
			}
		} else {
			i++;
		}
	}

	nums.forEach((num, i) => {
		if (num === undefined) {
			missingIndeces.push(i+1);
		}
	})

	return missingIndeces;
}


console.log(`${find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1])}`)


/*
2 3 1 8 2 3 5 1
3 2 1 8 2 3 5 1
1 2 3 8 2 3 5 1
1 2 3 undefined 2 3 5 8   [4]
1 2 3 undefined undefined 3 5 8   [4,5]

*/

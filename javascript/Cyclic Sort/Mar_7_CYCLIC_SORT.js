const cyclic_sort = function (nums) {
	for (let i = 0; i < nums.length;) {
		if (nums[i] !== i + 1) {
			const swap = nums[i];
			nums[i] = nums[swap - 1];
			nums[swap - 1] = swap;
		} else {
			i++;
		}
	}
	return nums;
}


console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`)
console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`)
console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`)

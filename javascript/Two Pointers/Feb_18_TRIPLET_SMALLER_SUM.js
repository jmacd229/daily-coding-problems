// https://www.educative.io/courses/grokking-the-coding-interview/mElknO5OKBO
const triplet_with_smaller_sum = function (arr, target) {
	const findPair = (index) => {
		const maxValue = target - arr[index];
		let leftIndex = index + 1;
		let rightIndex = arr.length - 1;
		let count = 0;
		while (leftIndex < rightIndex) {
			const currentValue = arr[leftIndex] + arr[rightIndex];
			// If we have found a set of three that is less than the target
			if (currentValue < maxValue) {
				// That means that the current set of three AS WELL AS every combination of
				// nums[index] + nums[leftIndex] + nums[EVERY_INDEX_BETWEEN rightIndex and leftIndex]
				// Will also satisfy this condition, therefore, we can add the difference between indeces to our count
				count += rightIndex - leftIndex;
				leftIndex++;
			} else {
				rightIndex--;
			}
		}
		return count;
	}

	arr.sort((a, b) => a - b);
	let result = 0;
	for (let i = 0; i < arr.length - 2 && arr[i] < target; i++) {
		result += findPair(i);
	}
	return result;
};

console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));

/*

-1, 1, 2, 3, 4

-1, 1, 4
-1, 1, 3
-1, 2, 3
-1, 1, 2

*/
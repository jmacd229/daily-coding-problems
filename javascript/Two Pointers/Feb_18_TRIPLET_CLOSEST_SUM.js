// https://www.educative.io/courses/grokking-the-coding-interview/3YlQz7PE7OA
const triplet_sum_close_to_target = function (arr, target_sum) {

	const findPair = (index) => {
		// After taking out our current index, what sum are we looking for?
		const searchValue = target_sum - arr[index];

		// Create left and right pointers starting at our current index + 1, and ending at the end of the array
		let leftIndex = index + 1;
		let rightIndex = arr.length - 1;
		let currentValue;
		while (leftIndex < rightIndex) {
			currentValue = arr[leftIndex] + arr[rightIndex];
			// If we have found a perfect match, return immediately
			if (currentValue === searchValue) {
				return currentValue + arr[index];
				// Otherwise, move our pointers to try and get closer
			} else if (currentValue < searchValue) {
				leftIndex++;
			} else {
				rightIndex--;
			}
		}
		return currentValue + arr[index];
	}

	// First sort the array so that we can use the two-pointer method
	arr.sort((a, b) => a - b);
	let closestSum;
	for (let i = 0; i < arr.length - 2; i++) {
		let currentSum = findPair(i);
		// If we were able to find the target sum we should return immediately
		if (currentSum === target_sum) {
			return currentSum;
		}
		// Otherwise we store the sum returned from our function that has the smallest difference to the target
		if (closestSum === undefined || Math.abs(target_sum - currentSum) < Math.abs(target_sum - closestSum)) {
			closestSum = currentSum;
		}
	}
	return closestSum;
};

console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));
// https://www.educative.io/courses/grokking-the-coding-interview/N8rOAP6Lmw6
const shortest_window_sort = function (arr = []) {
	// Edge cases
	if (arr.length === 1) {
		return 0;
	}
	if (arr.length === 2) {
		return arr[0] > arr[1] ? 2 : 0;
	}
	let leftIndex = 1;
	let rightIndex = arr.length - 2;
	let foundLeft;
	let foundRight;

	// Used to find the maximum and minimum values within an array
	const findMaxMin = (subArray) => {
		let min;
		let max;
		for (let i = 0; i < subArray.length; i++) {
			if (min === undefined || subArray[i] < min) {
				min = subArray[i];
			}
			if (max === undefined || subArray[i] > max) {
				max = subArray[i];
			}
		}
		return { min, max };
	}

	// Move inwards from the bounds of the array to find the first unsorted number on either side
	while (leftIndex <= rightIndex) {
		if (foundLeft !== undefined && foundRight !== undefined) {
			// If we have found the indexes of both the left and the right then we need to determine what the min and max numbers in the unsorted array are
			const { max, min } = findMaxMin(arr.slice(foundLeft, foundRight + 1));
			// We find the max and min because we need to grow the bounds of our unsorted array if there are numbers within it that would make the sorted be unsorted
			// ie.
			// 1,2,3,0,7,-1,5,6
			// Would have an initial unsorted array size of 3,0,7,-1 however sorting this to -1,0,3,7 doesn't sort our array
			// This is because 7 is larger than the right bound of our unsorted array, and -1 is smaller than the left bound of our array
			// Therefore we extend the bounds until the min and max are contained
			while (foundLeft > 0 && arr[foundLeft - 1] > min) {
				foundLeft--;
			}
			while (foundRight < arr.length - 1 && arr[foundRight + 1] < max) {
				foundRight++;
			}
			return foundRight - foundLeft + 1;
		}
		// if we find a pair of elements that are out of order, we store that as the left most bound of our unsorted subarray
		if (arr[leftIndex] < arr[leftIndex - 1]) {
			foundLeft = leftIndex - 1;
		} else {
			// Otherwise we keep looking
			leftIndex++;
		}
		// Do the same for the right most bound of the subarray
		if (arr[rightIndex] > arr[rightIndex + 1]) {
			foundRight = rightIndex + 1;
		} else {
			rightIndex--;
		}
	}
	return 0;
};

console.log(shortest_window_sort([1, 3, 2, 0, -1, 7, 10]));

/*

Input: [1, 2, 5, 3, 7, 10, 9, 12]
Output: 5
Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted

*/

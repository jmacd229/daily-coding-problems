const max_sub_array_of_size_k = function (k, arr) {
	let currentSum = arr.filter((_, i) => i < k).reduce((prev, curr) => prev += curr);
	let maxSum = currentSum;
	for (let i = 1; i < arr.length; i++) {
		currentSum -= arr[i - 1];
		currentSum += arr[i + k - 1];
		if (currentSum > maxSum) {
			maxSum = currentSum;
		}
	}
	return maxSum;
};

console.log(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2]));
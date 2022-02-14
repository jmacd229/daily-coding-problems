/** https://www.educative.io/courses/grokking-the-coding-interview/B6VypRxPolJ
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var length_of_longest_substring = function (arr, k) {
	let numZeros = 0;
	let maxLength = 0;
	let startIndex = 0;
	for (let endIndex = 0; endIndex < arr.length; endIndex++) {
		if (arr[endIndex] === 0) {
			numZeros++;
		}
		if (numZeros > k) {
			if (arr[startIndex] === 0) {
				numZeros--;
			}
			startIndex++;
		} else {
			maxLength = Math.max(maxLength, endIndex - startIndex + 1);
		}
	}
	return maxLength;
};

console.log(length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
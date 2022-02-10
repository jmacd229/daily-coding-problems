/** https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
 * @param {string} s
 * @return {number}
 */
const longest_substring_with_k_distinct = function (str, k) {
	let currentLetters = { [str[0]]: 1 }; // Map to store the the number of each letter
	let currentDisctinct = 1;
	let currentLength = 1;
	let maxLength = 0;
	let startIndex = 0;
	let endIndex = 0;
	while (endIndex < str.length) {
		// Store the maximum length possible
		if (currentLength > maxLength) {
			maxLength = currentLength;
		}
		// Move the end of our sliding window
		endIndex++;
		// If the new letter already exists in the map then we increment it, otherwise set it to 1
		if (currentLetters[str[endIndex]]) {
			currentLetters[str[endIndex]]++;
		} else {
			currentLetters[str[endIndex]] = 1;
			// If we've set it to 1, this means we have a new distinct character so should increment that counter
			currentDisctinct++
		}
		currentLength++;
		// If we are now over our limit of distinct characters, we need to slide the start of our window until it's back under the limit
		while (currentDisctinct > k) {
			currentLetters[str[startIndex]]--;
			currentLength--;
			// If removing the start character brings that character's total down to 0 then we can decrement the currentDisctinct counter
			if (!currentLetters[str[startIndex]]) {
				currentDisctinct--;
			}
			startIndex++;
		}
	}

	return maxLength;
};

console.log(longest_substring_with_k_distinct('cbbebi', 3))
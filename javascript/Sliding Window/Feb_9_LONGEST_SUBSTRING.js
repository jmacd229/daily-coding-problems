/** https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s, k = 1) {
	let currentLetters = { [s[0]]: 1 }; // Map to store the the number of each letter
	let currentLength = 1;
	let maxLength = 0;
	let startIndex = 0;
	let endIndex = 0;
	while (endIndex < s.length) {
		// Store the maximum length possible
		if (currentLength > maxLength) {
			maxLength = currentLength;
		}
		// Move the end of our sliding window
		endIndex++;
		// If the new letter already exists in the map then we increment it, otherwise set it to 1
		if (currentLetters[s[endIndex]]) {
			currentLetters[s[endIndex]]++;
		} else {
			currentLetters[s[endIndex]] = 1;
		}
		currentLength++;
		// If the recently incremented letter is over our limit then we need to slide the start of our window until it's back under the limit
		while (currentLetters[s[endIndex]] > k) {
			currentLetters[s[startIndex++]]--;
			currentLength--;
		}
	}

	return maxLength;
};

console.log(lengthOfLongestSubstring('pwwkew'))
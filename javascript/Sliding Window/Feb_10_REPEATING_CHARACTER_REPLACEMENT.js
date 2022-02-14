/** https://leetcode.com/problems/longest-repeating-character-replacement/
 * @param {sing} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
	let currentLetters = { [s[0]]: 1 }; // Map to store the the number of each letter
	let currentLength = 1;
	let maxLength = 0;
	let startIndex = 0;
	let endIndex = 0;
	let currentMaxLetterCount = 1;

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

		// If the letter we just incremented is greater than our previous maximum then set a new maximum
		if (currentLetters[s[endIndex]] >= currentMaxLetterCount) {
			currentMaxLetterCount = currentLetters[s[endIndex]];
		}
		currentLength++;

		// If the sum of all letters minus our current letter with the greatest frequency, is less than our allowed replacements (k)
		if (currentLength - currentMaxLetterCount > k) {
			// Move the start of our sliding index up
			/* There are two possibilities from moving our index up
			a) we removed one of the letters not included in our currentMaxLetterCount
			b) we removed one of the letters in our currentMaxLetterCount

			in either case, it doesn't matter.
			currentMaxLetterCount has the highest continuous letter count we were able to achieve and that won't change until we find another substring with a greater count
			therefore the window will continue to slide without growing, so there is no risk of us increasing the returned length until we find a greater substring
			*/
			currentLetters[s[startIndex]]--;
			startIndex++;
			currentLength--;
		}
	}

	return maxLength;
};

console.log(characterReplacement('aaabcdefghhhh',1));
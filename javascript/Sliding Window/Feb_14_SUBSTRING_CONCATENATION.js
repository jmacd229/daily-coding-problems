/** https://leetcode.com/problems/substring-with-concatenation-of-all-words/
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
	let wordMap = getMap(words);
	const wordLength = words[0].length;

	let currentWord = '';
	let indexes = [];

	// Since words can intersect at any point (for example) ["aa", "aa"] would appear at 0, 1, 2, etc.
	// We need to try every starting index
	for (let beginningOfSubstring = 0; beginningOfSubstring <= (s.length - wordLength); beginningOfSubstring++) {
		let wordsSeen = {};
		let currentCount = 0;
		// For each starting index, check chunks of words based on word length (ie. get 4 letter chunks at a time)
		for (let startIndex = beginningOfSubstring; startIndex <= (s.length - wordLength); startIndex += wordLength) {
			currentWord = s.substring(startIndex, startIndex + wordLength);
			// If the current word doesn't exist then this is not a potential match
			if (!(currentWord in wordMap)) {
				break;
			} else {
				// Break early if this word has already been seen the number of times we need it
				if (wordsSeen[currentWord] === wordMap[currentWord]) {
					break;
				}
				// Otherwise, build out our wordsSeen map with it
				if (wordsSeen[currentWord] === undefined) {
					wordsSeen[currentWord] = 1;
				} else {
					wordsSeen[currentWord]++;
				}
				// Current count keeps track of how many overall words we need
				currentCount++;
				// If we've just managed to get a goal # for one of our words, and have the right total # of words then we've found our pattern
				if (wordMap[currentWord] === wordsSeen[currentWord] && currentCount === words.length) {
					indexes.push(beginningOfSubstring);
					break;
				}
			}
		}
	}
	return indexes;
};

const getMap = words => words.reduce((pre, curr) => {
	pre[curr] ? pre[curr]++ : pre[curr] = 1;
	return pre;
}, {});

console.log(findSubstring("aaaaaaaaaaaaaa", ["aa", "aa"]));

// Tomorrow try and create TWO windows
// Am individual word window and a concatenation window
// We have two windows that need to grow and expand here since when we get to the third "good" we need to shrink the concatenation window
/*
https://leetcode.com/problems/minimum-window-substring/submissions/
https://www.educative.io/courses/grokking-the-coding-interview/3wDJAYG2pAR
*/
const minWindow = function (s, p) {
	// Keeps track of the letter frequency in the word we're looking for anagrams of
	let letterMap = getLetterMap(p);
	// Keeps track of the number of character that need to be brought down to 0
	let distinctLetters = Object.keys(letterMap).length;

	let shortestString = '';
	let startIndex = 0;
	// If the first letter isn't in our pattern, then we shouldn't start our window until we see a letter in the pattern
	while (!(s[startIndex] in letterMap) && startIndex < s.length) {
		startIndex++;
	}
	// Start the window and end it on the same index to start
	for (let endIndex = startIndex; endIndex < s.length; endIndex++) {
		// We only care if the end of the window is part of the pattern, otherwise keep expanding
		if ((s[endIndex] in letterMap)) {
			// Decrement the letter we found
			letterMap[s[endIndex]]--;
			// If we've decremented the letter to 0 then that means we've found all we need of that letter, therefore we can decremend distinctLetters
			if (letterMap[s[endIndex]] === 0) {
				distinctLetters--;
				// If we've managed to get all of the letters we need for our pattern
				while (distinctLetters === 0) {
					// Check if our current length is the shortest possible
					const currentString = s.substring(startIndex, endIndex + 1);
					if (shortestString === '' || currentString.length < shortestString.length) {
						shortestString = currentString;
					}
					// now we attempt to shrink our window by moving up the window start until we find a letter from our pattern
					// Once we find a letter from our pattern and its count goes > 0 then we have to increment distinct letters
					// since we now need to find it again at the end of the window. This will break us out of the while loop
					if (s[startIndex] in letterMap) {
						letterMap[s[startIndex]]++;
						if (letterMap[s[startIndex]] > 0) {
							distinctLetters++;
						}
					}
					startIndex++;
				}
			}
		}
	}
	return shortestString;
};

//

const getLetterMap = p => Array.from(p).reduce((prev, curr) => {
	if (prev[curr]) {
		prev[curr]++;
	} else {
		prev[curr] = 1;
	}
	return prev;
}, {});

console.log(minWindow('ADOBECODEBANC', 'ABC'));

// https://www.educative.io/courses/grokking-the-coding-interview/N8vB7OVYo2D
// https://leetcode.com/problems/find-all-anagrams-in-a-sing/
const find_string_anagrams = function (s, p) {
	let letterMap = getLetterMap(p);
	let disctinctLetterCount = Object.keys(letterMap).length;

	const indexes = [];
	let startIndex = 0;
	for (let endIndex = 0; endIndex < s.length; endIndex++) {
		// Our window should never be larger than the pattern's length, otherwise it's impossible to find an anagram
		if (endIndex - startIndex === p.length) {
			if(letterMap[s[startIndex]] === 0){
				disctinctLetterCount++;
			}
			// Therefore if it is larger, we should move up our start index
			letterMap[s[startIndex]]++;
			if(letterMap[s[startIndex]] === 0){
				disctinctLetterCount--;
			}
			startIndex++;
		}
		// If we find a letter that's in the pattern, we decrement it from the map to note that it's in the current window
		if (s[endIndex] in letterMap) {
			if(letterMap[s[endIndex]] === 0){
				disctinctLetterCount++;
			}
			letterMap[s[endIndex]]--;
			// If we just decremented a value to 0, we should check if all letters are 0, if so, then we've found an anagram
			if (letterMap[s[endIndex]] === 0) {
				disctinctLetterCount--;
				if (disctinctLetterCount === 0) {
					indexes.push(startIndex);
				}
			}
		} else {
			startIndex = endIndex + 1;
			letterMap = getLetterMap(p);
			disctinctLetterCount = Object.keys(letterMap).length;
		}
	}
	return indexes;
};

const getLetterMap = p => Array.from(p).reduce((prev, curr) => {
	if (prev[curr]) {
		prev[curr]++;
	} else {
		prev[curr] = 1;
	}
	return prev;
}, {});

console.log(findAnagrams('abaacbabc', 'abc'));

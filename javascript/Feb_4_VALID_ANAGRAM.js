/** https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	if (s.length !== t.length) {
		return false;
	}
	let letterMap = {};
	for (let i = 0; i < s.length; i++) {
		if (letterMap[s[i]] === undefined) {
			letterMap[s[i]] = 1;
		} else {
			letterMap[s[i]]++;
		}
	}
	for (let i = 0; i < t.length; i++) {
		if (letterMap[t[i]] === undefined || letterMap[t[i]] === 0) {
			return false;
		}
		letterMap[t[i]]--;
	}
	return true;
};

console.log(isAnagram('aacc', 'ccac'));
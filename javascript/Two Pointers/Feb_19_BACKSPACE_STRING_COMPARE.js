/**https://leetcode.com/problems/backspace-string-compare/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
	let sIndex = s.length - 1;
	let tIndex = t.length - 1;

	// Utility function to move backwards and remove all backspaces
	const removeBackSpaces = (word, index) => {
		let backspaces = 0
		// If we have any backspaces banked, or are currently on a backspace, continue the loop until we run out of letters
		while (index >= 0 && (word[index] === "#" || backspaces > 0)) {
			// Either bank a backspace or take one out of the bank
			if (word[index] === "#") {
				backspaces++;
			} else {
				backspaces--;
			}
			// Either action will cause us to decrement the index
			index--;
		}
		return index;
	}

	do {
		// Remove all backspaces from both words (starting at the end) until we are on the current letter for both of them
		sIndex = removeBackSpaces(s, sIndex);
		tIndex = removeBackSpaces(t, tIndex);
		// If the current letter is equal then we move on to the next letter
		if (s[sIndex] === t[tIndex]) {
			sIndex--;
			tIndex--;
			// If it's not equal, we've already removed all backspaces, therefore the strings are not equal
		} else {
			return false;
		}
		// If the strings run out of characters then we break out of the loop
	} while (sIndex >= 0 || tIndex >= 0)
	return true;
};

console.log(backspaceCompare("ab##", "c#d#"))

/*
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

"xywrrmp"
"xywrrm#p"

"bxj##tw"
"bxj###tw"
*/
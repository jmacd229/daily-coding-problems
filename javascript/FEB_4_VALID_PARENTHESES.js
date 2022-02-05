/**https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	const bracketStack = [];

	// Used to translate closing brackets into opening brackets
	const bracketMap = {
		'}': '{',
		']': '[',
		')': '(',
	};

	// If we start with a closing bracket or there's an uneven number of elements we know it's not valid
	if (s.length % 2 !== 0 || !isLeft(s[0])) {
		return false;
	}

	// Traverse the string and add to the stack every time we see a left bracket
	for (let i = 0; i < s.length; i++) {
		if (isLeft(s[i])) {
			bracketStack.push(s[i]);
		} else {
			// If we see a right bracket, make sure it is the equivalent to the most recent bracket on the stack
			if (bracketMap[s[i]] === bracketStack[bracketStack.length - 1]) {
				// If it is, we can cancel that bracket out and move on
				bracketStack.pop();
			} else {
				// If it is not matching, that means we have an invalid string
				return false;
			}
		}
	}
	// At the end of traversal the stack should be empty from all brackets cancelling out, if not then the string is not valid
	return bracketStack.length === 0;
};

const isLeft = char => ['{', '(', '['].includes(char);
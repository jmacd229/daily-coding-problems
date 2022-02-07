/** https://leetcode.com/problems/rectangle-overlap/
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
	// Length and height must overlap in order for them to overlap
	if (overlapsInLength(rec1, rec2) || overlapsInLength(rec2, rec1)) {
		return overlapsInWidth(rec1, rec2) || overlapsInWidth(rec2, rec1)
	}
	return false;
};

// Check if the ending point of rectangle 1 is between the start and end point of rectangle 2
const overlapsInLength = (rec1, rec2) => rec1[2] > rec2[0] && rec1[2] <= rec2[2]
const overlapsInWidth = (rec1, rec2) => rec1[3] > rec2[1] && rec1[3] <= rec2[3]


console.log(isRectangleOverlap([5, 15, 8, 18], [0, 3, 7, 9]));
/*

[5,15,8,18]
[0,3,7,9]
false

[x1, y1, x2, y2]

	__ __
 __|__   |
|  |__|__|
|__ __|
Example 1:

Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
Output: true

Example 2:

Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
Output: false

Example 3:

Input: rec1 = [0,0,1,1], rec2 = [2,2,3,3]
Output: false

*/
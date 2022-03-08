/** https://leetcode.com/problems/merge-intervals/
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	// First sort them so that we know the start of each pair is in ascending order
	intervals = intervals.sort(([a], [c]) => a - c);
	let i = 0;
	// Iterate until the 2nd last element
	while (i < intervals.length - 1) {
		const [a, b] = intervals[i];
		const [c, d] = intervals[i + 1];
		// Slight overlap
		if (b >= c && b <= d) {
			// Remove the elements and add in the new one
			intervals.splice(i, 2, [a, d])
		}
		// Complete overlap (inverse of no overlap)
		else if (b >= c) {
			intervals.splice(i, 2, [a, b])
		} else { // No overlap so continue to next element
			i++;
		}
	}
	return intervals;
};


merge([[1,4]]).forEach(interval => console.log(interval));
/*
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].


[2,4],[5,9],[6,7],[8,12]
*/
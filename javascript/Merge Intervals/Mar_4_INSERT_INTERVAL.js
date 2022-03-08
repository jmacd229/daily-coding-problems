/** https://leetcode.com/problems/insert-interval/
* @param {number[][]} intervals
* @param {number[]} newInterval
* @return {number[][]}
*/
var insert = function (intervals, newInterval) {
	let startIndex = 0;
	if(intervals.length === 0){
		return [newInterval];
	}
	// The new interval is too small to fit
	if (newInterval[1] < intervals[0][0]) {
		intervals.unshift(newInterval);
		return intervals;
	}
	while (newInterval[0] > intervals[startIndex][1]) {
		startIndex++;
		// Hit the end of the array
		if (startIndex === intervals.length) {
			intervals.push(newInterval);
			return intervals;
		}
	}
	let endIndex = startIndex;
	while (endIndex !== intervals.length && newInterval[1] >= intervals[endIndex][0]) {
		endIndex++;
	}
	endIndex -= 1;
	const a = newInterval[0] >= intervals[startIndex][0] ? intervals[startIndex][0] : newInterval[0];
	const b = newInterval[1] >= intervals[endIndex][1] ? newInterval[1] : intervals[endIndex][1];
	intervals.splice(startIndex, (endIndex - startIndex + 1), [a, b]);
	return intervals;
};


insert([], [5,7]).forEach(interval => console.log(interval));
/*
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
*/
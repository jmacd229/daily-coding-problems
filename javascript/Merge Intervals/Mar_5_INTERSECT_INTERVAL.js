/** https://leetcode.com/problems/interval-list-intersections/
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
	let indeces = [0,0];
	const result = [];

	const compare = (a, b, isReverse) => {
		if (a[1] < b[0]) {
			// a and b don't intersect
			indeces[isReverse ? 1 : 0]++;
		} else {
			if (a[1] >= b[1]) {
				// a completely intersects b
				result.push(b);
				indeces[isReverse ? 0 : 1]++
			} else {
				// a partially intersects b
				result.push([b[0], a[1]]);
				indeces[isReverse ? 1 : 0]++
			}
		}
	}

	while (indeces[0] !== firstList.length && indeces[1] !== secondList.length) {
		const a = firstList[indeces[0]];
		const b = secondList[indeces[1]];
		if (a[0] <= b[0]) {
			compare(a, b);
		} else {
			compare(b, a, true);
		}
	}
	return result;

};

intervalIntersection([[0, 2], [5, 10], [13, 23], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]]).forEach(interval => console.log(interval))

/*
Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]


		if(a[0] < b[0]){
			// overlap
			if(a[1] >= b[0]){

			} else {
				aIndex++;
				continue;
			}
		}
*/
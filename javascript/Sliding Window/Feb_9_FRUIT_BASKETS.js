/** https://leetcode.com/problems/fruit-into-baskets/
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits, numBaskets = 2) {
	const baskets = {};
	baskets[fruits[0]] = 1;
	let startIndex = 0;
	let endIndex = 0;
	let currentFruits = 1;
	let maxFruits = 0;
	while (endIndex < fruits.length) {
		if(currentFruits > maxFruits) {
			maxFruits = currentFruits;
		}
		endIndex++;
		if (!baskets[fruits[endIndex]]) {
			baskets[fruits[endIndex]] = 1;
		} else {
			baskets[fruits[endIndex]]++;
		}
		currentFruits++;
		while(Object.keys(baskets).length > numBaskets){
			baskets[fruits[startIndex]]--;
			currentFruits--;
			if(baskets[fruits[startIndex]] === 0) {
				delete baskets[fruits[startIndex]];
			}
			startIndex++;
		}
	}
	return maxFruits;
};

console.log(totalFruit([1,2,3,2,2]));
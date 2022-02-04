/**https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	// Pointer to the day we plan to buy the stock
	let buyIndex = 0;
	// Pointer to the day we plan to sell the stock
	let sellIndex = 1;
	// The currently max calculated profit
	let max = 0;

	// When sellIndex > prices.length, we have run out of days to sell
	while (sellIndex < prices.length) {
		// If we're currently buying for higher than we're selling, then we should buy on that day instead
		if (prices[buyIndex] > prices[sellIndex]) {
			buyIndex = sellIndex;
			sellIndex++; // The selling day has to go up by one since we can't buy and sell on the same day
		} else {
			const profit = prices[sellIndex] - prices[buyIndex];
			// If we're selling for higher than we're buying we should calculate the profit and see if it's higher than our current max
			if (profit > max) {
				max = profit;
			}
			// check to see if we can make more profit by selling on the next day
			sellIndex++;
		}
	}
	return max;
};

console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));

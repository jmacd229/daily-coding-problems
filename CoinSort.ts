function coinChange(coins: number[], amount: number): number {
    let max = amount + 1;
    let dp = new Array(amount + 1).fill(max);
    // Fill array with amount we're trying to get +1

    //fill first entry with 0;
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
      for (let j = 0; j < coins.length; j++) {
          // If the currently tested coin is less than the amount we're trying to calculate
          // The ability to get there is
        if (coins[j] <= i) {
          dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
        }
      }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};

console.log(coinChange([1,5,2], 11));
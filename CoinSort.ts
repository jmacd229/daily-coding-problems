function coinChange(coins: number[], amount: number): number {
    coins = coins.sort((a,b) => b - a);
    if(amount === 0){
        return 0;
    }
    let counter = 0;
    for(let i = 0; i < coins.length; i++){
        if(amount - coins[i] === 0){
            return counter + 1;
        } else if (amount - coins[i] > 0){
            amount -= coins[i];
            counter +=1;
            // Try the same coin again next time
            i -=1;
        }
    }
    return -1;
};

console.log(coinChange([1,5,2], 11));
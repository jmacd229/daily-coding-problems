function uniquePaths(m: number, n: number): number {
    const memo = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for(let i=0; i< Math.max(m,n);i++){
        if(i < m){
        memo[i][0] = 1;
        }
        if(i < n){
            memo[0][i] = 1;
        }
    }
    
    for(let i =1; i < m; i++){
        for(let j =1; j < n; j++){
            memo[i][j] = memo[i-1][j] + memo[i][j-1]; 
        }
    }
    return memo[m-1][n-1];
};

console.log(uniquePaths(5,3));
function generateParenthesis(n: number): string[] {
    let result = [];
    backtrack2('', 0, 0, n, result);

return result;
};

function backtrack2(current: string, left: number, right: number, max: number, result: string[]){
    if(current.length === max*2){
        result.push(current);
    } else {
        if(left < max){
            backtrack2(current + "(", left + 1, right, max, result);
        }
        if(right < left){
            backtrack2(current + ")", left, right + 1, max, result);
        }
    }
}

console.log(generateParenthesis(3));

/*
Can either wrap or append
*/
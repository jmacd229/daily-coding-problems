const map = {
    '2': ['a','b','c'],
    '3': ['d','e','f'],
    '4': ['g','h','i'],
    '5': ['j','k','l'],
    '6': ['m','n','o'],
    '7': ['p','q','r', 's'],
    '8': ['t','u','v'],
    '9': ['w','x','y', 'z']
}


function letterCombinations(digits: string): string[] {
    let result = [];
    backtrack('', digits, result);

return result;
};

function backtrack(current: string, remaining: string, result: string[]){
    if(!remaining.length){
        result.push(current);
    } else {
        const num = remaining.charAt(0);
        remaining = remaining.substr(1);
        for(let  i=0; i< map[num].length; i++){
            backtrack(current + map[num][i], remaining, result);
        }
    }
}

console.log(letterCombinations("23"));
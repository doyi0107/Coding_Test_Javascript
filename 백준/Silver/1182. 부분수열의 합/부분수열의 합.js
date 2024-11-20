let input = require('fs').readFileSync("/dev/stdin").toString().split('\n');

let [N, S] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let result = 0;

const dfs = (index, sum) => {
    if(index === N) return;
    
    if(sum + arr[index] === S) result++;

    dfs(index + 1, sum);
    dfs(index + 1, sum + arr[index]);
}

dfs(0,0);
console.log(result);
//x
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

let T = input[0];

let dp = Array.from({length:41}, () => [0,0]);

dp[0][0]++;
dp[1][1]++;


for(let i=2; i<=40; i++){
   dp[i][0] = dp[i-1][0] + dp[i-2][0];
   dp[i][1] = dp[i-1][1] + dp[i-2][1];
}

for(let i=1; i<=T; i++){
   console.log(dp[input[i]].join(" "))
}
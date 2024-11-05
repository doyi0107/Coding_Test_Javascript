let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [n,...arr] = input;
arr = arr.map((x) => x.split(" "));
let result = 0; 

arr[0].sort((a,b) => a-b);
arr[1].sort((a,b) => b-a);

for(let i=0; i<arr[0].length; i++){
     result +=(arr[0][i] * arr[1][i])
}

console.log(result)

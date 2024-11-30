let fs = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [ size, ...arr] = fs
let [n, m] = size.split(" ").map(Number);
let maxSquare = Math.min(n,m)

arr = arr.map((x) => x.trim().split("").map(Number));


let result;

while(maxSquare > 0){
  for (let i = 0; i <= n - maxSquare; i++) {
    for (let j = 0; j <= m - maxSquare; j++) {

      if (
        arr[i][j] == arr[i][j + maxSquare - 1] &&
        arr[i][j + maxSquare - 1] == arr[i + maxSquare - 1][j] &&
        arr[i + maxSquare - 1][j] ==
          arr[i + maxSquare - 1][j + maxSquare - 1] &&
        arr[i + maxSquare - 1][j + maxSquare - 1] == arr[i][j]
      ) {
        result = maxSquare * maxSquare;
        break;
      }

    }
    if (result) break;
  }
  if (result) break;
  maxSquare--;
}


console.log(result);


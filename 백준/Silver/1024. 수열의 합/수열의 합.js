let input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);
let sum = input[0];
let m = input[1];

const findResult = (sum, m) => {
  // 최소 길이부터 시작
  for (let i = m; i <= 100; i++) {

    // 수열의 첫 번째 정수 찾기
    const x = (sum - (i * (i - 1)) / 2) / i;

    if (x >= 0 && Number.isInteger(x)) {
      let arr = Array.from({ length: i }, (_, k) => x + k);
    
      return arr.join(" ");
    }
  }
  
  return -1;
};


console.log(findResult(sum,m));
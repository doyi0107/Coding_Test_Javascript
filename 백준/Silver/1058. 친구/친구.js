let input = require("fs").readFileSync("/dev/stdin").toString().split('\n');

let n = Number(input.shift());
input = input.map(x => x.split(""));

let max = 0;

input.forEach((x,i) => {
    let temp = [];

    x.forEach((k,idx) => {
        if(k === 'Y'){
             temp.push(idx);     
        }
    })
     
    let list = new Set(temp);
    temp.forEach((j) => {
      input[j].forEach((str, idn) => {
        if (str === "Y" && idn !== i) {
          list.add(idn);
        }
      });
    });

    
    max = Math.max(max, list.size);
})

console.log(max);

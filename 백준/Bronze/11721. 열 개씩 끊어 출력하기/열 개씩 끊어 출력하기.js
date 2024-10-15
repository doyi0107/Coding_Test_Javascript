let input = require("fs").readFileSync("/dev/stdin").toString();

for(let i=0; i<input.length; i+=10){
    let result = input.slice(i, i+10);
    console.log(result); 
}

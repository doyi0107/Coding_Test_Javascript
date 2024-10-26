function solution(x) {    
    let numArr = x.toString().split("").map(Number);
    return x%numArr.reduce((acc,x) => x+acc) == 0 ? true : false
}
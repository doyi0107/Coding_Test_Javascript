function solution(s) {
    let sortedArr = s.split(" ").map(Number).sort((a,b) => a-b);
    return sortedArr[0] + " " + sortedArr[sortedArr.length-1]
}
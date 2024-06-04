function solution(arr) {
    let result = arr.filter((x) => x !== Math.min(...arr))
    return  arr.length > 1 ? result : [-1]
}
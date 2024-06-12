function solution(arr, divisor) {
    let result = arr.filter((x,i) =>  x%divisor === 0)
    return result.length === 0 ? [-1] :  result.sort((a, b) => a-b)
}
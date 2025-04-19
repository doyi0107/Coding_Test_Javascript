function solution(arr, k) {
    let arr2 = [...new Set(arr)];
    let result = [];
    for(let i=0; i<k; i++){
        arr2[i] !== undefined ? result.push(arr2[i]) : result.push(-1)
    }
    
    return result;
}
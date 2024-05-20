function solution(arr1, arr2) {
    let row = arr1[0].length;
    let col = arr1.length;
    
    for(let i=0; i<col; i++){
        for(let k=0; k<row; k++){
            arr2[i][k] = arr2[i][k] + arr1[i][k]
        }
    }
    return arr2
}
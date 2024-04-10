function solution(k, tangerine) {
    let count = 0, result = 0, object = {};
    
    tangerine.forEach((x,i) => {
        object[x] == undefined ? object[x] = 1 : object[x]++
    })
    
    let gulnum = Object.entries(object).sort(([,a],[,b]) => b-a)
    
    gulnum.forEach((x,i) => {
        if( count < k){
            count += x[1]; result++
        }
    })
    
    return result
}
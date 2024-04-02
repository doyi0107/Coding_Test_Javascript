function solution(array, commands) {
    let result = [];
    commands.forEach((arr,i) => {
        let cutarr = array.slice(arr[0]-1,arr[1])
        cutarr.sort( (a,b) => a-b)
        result.push(cutarr[arr[2]-1])
    })
    
    return result
}
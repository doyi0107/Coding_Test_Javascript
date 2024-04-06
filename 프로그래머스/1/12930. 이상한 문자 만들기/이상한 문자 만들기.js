function solution(s) {
     let result = [];
    for(let i=0; i< s.length; i++){
       i%2 === 1 ? result.push(s[i].toLowerCase()) : result.push(s[i].toUpperCase())
    }
    console.log(result)
    return result.join('')
}
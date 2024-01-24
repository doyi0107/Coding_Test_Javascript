function solution(numbers) {
     let string_arr = [];
    
     numbers.forEach((x,i) => {
         string_arr.push(x.toString())
     })
    
    let array = string_arr.sort((a,b) => (b+a) - (a+b))
    
     return array.join('')[0] === "0" ? "0" : array.join('')
}
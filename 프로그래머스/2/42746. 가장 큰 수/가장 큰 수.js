function solution(numbers) {
   let numstring = numbers.map(String);
   let arr = numstring.sort((a,b) => (b+a) - (a+b)).join('')
    
    return     arr[0] === '0' ? '0' :  arr
}



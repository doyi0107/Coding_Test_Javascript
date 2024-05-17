function solution(numbers) {
     let sum = [];
      for(let i=0; i<numbers.length; i++){
          for(let k=1+i; k<numbers.length; k++){
              sum.push(numbers[i]+numbers[k])
          }
      }
    
    let newSum = new Set(sum)
    
    return [...newSum].sort((a,b) => a-b)
}
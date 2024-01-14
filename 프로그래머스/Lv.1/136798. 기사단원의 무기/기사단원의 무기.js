function solution(number, limit, power) {
     
    let answer =  [...new Array(number)].map((_,i)=>{
         let count = 0;
          for(let k = 1; k < Math.sqrt(i+1); k++){
              if( (i+1) % k === 0){
                   count++;
              }
          }
         return count*2 + Number.isInteger(Math.sqrt(i+1))
     }).reduce((acc,x) => {
         return x <= limit ? acc+x : acc+ power
     })
    
    return answer
}


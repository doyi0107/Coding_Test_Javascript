function solution(want, number, discount) {
    let match = {}, count = 0;
     want.forEach((x,idx) => {
         match[x] = number[idx]
     })   
    
    discount.forEach((_,i) =>{
          const discountSet = discount.slice(i,i+10)
          
          const copymatch = {...match}
          discountSet.forEach((k,index) => {
              if(copymatch[k]){
                  copymatch[k]--
              }
              
              if(copymatch[k] === 0){
                  delete copymatch[k]
              }       
          })
              if(Object.keys(copymatch).length === 0){
                         count++;
                      }              
    })
   return count
    
}
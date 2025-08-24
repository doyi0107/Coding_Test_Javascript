function solution(number) {
   let result = 0; 
   let num = 0 ;
    for(let i=0; i<number.length; i++){
        for(let k=i+1; k<number.length; k++){ 
            for(let j=k+1; j<number.length; j++){ 
                 num += number[i]
                 num += number[k]    
                 num += number[j]     
                 if(num == 0) result ++; 
                 num = 0 
            }
        }
    }
    
    return result 
}
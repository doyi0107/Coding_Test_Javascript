function solution(s) {
   let count = 0,diff = 0,first = undefined,answer = 0; 
    s.split('').forEach((x,i) =>{          
        if( first === undefined ){
            first = x
            count++;
        }else if(first !== x){
            diff++;
       }else{
           count++;
       }
        
        if(count === diff){
            answer++;
            first = undefined;
            count = 0;
            diff = 0; 
        }else if(i+1 === s.length){
            answer++;
           }        
    })
    return answer 
}
function solution(participant, completion) {
    let answer;
     let hashmap = new Map();
     
     participant.forEach((x,i)=>{
         if(hashmap.has(x)){
             hashmap.set(x, hashmap.get(x)+1)
             
         }else{
             hashmap.set( x, 1)
         }
     })
    
    completion.forEach((x,i) => {
         if(hashmap.has(x)){
             hashmap.set( x, hashmap.get(x)-1)
         }
    })
    
    for(let [key,value] of hashmap){
        if(value === 1){
            answer = key
        }
    }
    
    return   answer
}
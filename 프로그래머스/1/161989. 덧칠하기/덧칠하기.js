function solution(n, m, section) {
   let result = 0;
   let maxRange = -Infinity;
    section.forEach(x => {
        if(maxRange < x){
           result++;
           maxRange = x+m-1     
         }
    })
    
    return result;
}
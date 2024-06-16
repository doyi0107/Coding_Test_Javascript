function solution(progresses, speeds) {
   let result = [0];
    let days = progresses.map((x,i) => { return Math.ceil((100-x)/speeds[i])})
   let Maxdays = days[0]
   
   for(let i = 0, j=0; i<days.length; i++){
       if(Maxdays >= days[i]){
           result[j] += 1
       }else{
           Maxdays = days[i]
           result[++j] = 1;
      }
   }
    
    return result
}
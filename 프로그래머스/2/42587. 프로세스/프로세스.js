function solution(priorities, location) {
     let objpri = priorities.map((x,i) => [x,i])
     let arr = [];
     let result = 0;
     
     
     for(let i = 0; i<objpri.length;){
          let temp = objpri.shift();
         if(objpri.some((x) => temp[0] < x[0])){ objpri.push(temp)}
 
         else{
             arr.push(temp)
             if(arr[result][1] === location)break;
             else{result++;}
         }
     }
     return result+1
}
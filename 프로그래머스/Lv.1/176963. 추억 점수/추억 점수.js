function solution(name, yearning, photo) {
    let match = {}
   name.forEach((x,i) =>{
       match[x] = yearning[i]
   }) 
       
   return photo.map((k,idx)=>{
        let sum = 0;
       k.forEach((y,i)=>{    
           Object.keys(match).includes(y) ? sum = sum+match[y]  : sum = sum+0 })   
         return sum
   })
    
}
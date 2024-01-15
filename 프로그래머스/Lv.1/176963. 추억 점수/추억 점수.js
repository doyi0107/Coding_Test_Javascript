function solution(name, yearning, photo) {
    let match = {}
   name.forEach((x,i) =>{
       match[x] = yearning[i]
   }) 
       
   return photo.map((k,idx)=>{
        let sum = 0;
       k.forEach((y,i)=>{   
           console.log(match.y)
           Object.keys(match).includes(y) ? sum += match[y]  : sum += 0 })   
         return sum
   })
    
}
function solution(name, yearning, photo) {
    let match = {}
   name.forEach((x,i) =>{
       match[x] = yearning[i]
   }) 
    
    let result = []
    
   photo.forEach((k,idx)=>{
        let sum = 0;
       k.forEach((y,i)=>{    

           Object.keys(match).includes(y) ? sum = sum+match[y]  : sum = sum+0 })   
         result.push(sum)
   })
    return result
    
}
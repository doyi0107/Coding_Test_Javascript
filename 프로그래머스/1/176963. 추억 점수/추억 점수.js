function solution(name, yearning, photo) {
   let obj = {};
   for(let i=0; i<name.length; i++){
       obj[name[i]] = yearning[i]
   }
   let result = [];
   photo.forEach((arr,i) => {
      let sum = 0; 
      arr.forEach((x,idx) => {
         name.includes(x) ? sum += obj[x] : sum 
       })
      result.push(sum)
   })
   return result
}
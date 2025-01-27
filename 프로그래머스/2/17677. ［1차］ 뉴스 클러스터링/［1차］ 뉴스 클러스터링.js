function solution(str1, str2) {
     const explode = (text) => {
         let result = [];
         for(let i=0; i<text.length-1; i++){
             const node = text.substr(i,2);
             if(node.match(/[A-Za-z]{2}/)){
                 result.push(node.toLowerCase())
             }
         }
         
         return result;
     }
     
     let arr1 = explode(str1);
     let arr2 = explode(str2);

     let set = new Set([...arr1, ...arr2])

     let union = 0;
     let intersection = 0; 
     set.forEach((item) => {
         const has1 = arr1.filter((x) => x==item).length;
         const has2 = arr2.filter((x) => x==item).length;
         union += Math.max(has1, has2);
         intersection += Math.min(has1, has2);
     })
    
    return union === 0 ? 65536 : Math.floor(intersection/union * 65536)
}
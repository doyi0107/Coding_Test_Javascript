function solution(s) {
    let array = s.slice(2,s.length-2).split('},{').map((x,i)=>{
        return x.split(',').map((str)=>Number(str))
   })
    array.sort((a,b) => a.length - b.length)
    let result = []
    array.forEach((k,idx) => {
       k.forEach( num=>{
           if(result.includes(num) === false){
                   result.push(num)
              }
       })
        
    })
   return  result
}
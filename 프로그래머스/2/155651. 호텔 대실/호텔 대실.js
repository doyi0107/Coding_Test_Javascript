function solution(book_time) {
     let result = []
   let array = book_time.map(([start,end])=> {
           let [start_hour,start_minute] = start.split(":").map((x) => Number(x));
         let [end_hour,end_minute] = end.split(":").map((x) => Number(x));
        return [start_hour*60 + start_minute , end_hour*60+end_minute+10]
   })
   
   array.sort((a,b) => a[0] - b[0])
    
   array.forEach(([start,end]) => {
       if(Math.min(...result) > start){
           result.push(end)
         }else{
             const minidx = result.indexOf(Math.min(...result))
             result.splice(minidx,1,end)
            }
   })
    
    return result.length

}
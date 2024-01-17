function solution(keymap, targets) {
    let match = {};
    keymap.forEach((x,idx) => {
            x.split('').forEach((k,index) =>{
               match[k] =  (match[k] < index+1 ?  match[k] : index+1  ) 
                      
            })
        }) 
    
  let result = targets.map((x,idx) =>{
        let count = 0;
      let empty = 0;
        x.split('').forEach((k,index) => {
            if(match[k] === undefined ){
                   empty = -1
            }else{
                 count += match[k]
            }
            
        })
            return empty == -1 ? empty : count
    })
     return result
}     
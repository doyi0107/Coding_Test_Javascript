function solution(keymap, targets) {
    let result = [], match = {};
    keymap.forEach((x,idx) => {
            x.split('').forEach((k,index) =>{
                if(match[k] === undefined){
                     match[k] = index+1
                }else{
                     match[k] = Math.min(match[k],index+1)
                }          
            })
        }) 
    
    const answer =  targets.map((x,idx) =>{
        let count = 0;
        let isSearch = true
        x.split('').forEach((k,index) => {
            if(match[k] === undefined ){
                     isSearch = false
            }else{
                 count += match[k]
            }
            
        })
            return isSearch ? count : -1
    })
     return answer
}     
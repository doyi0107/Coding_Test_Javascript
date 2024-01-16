function solution(s) {
     const greatMatch = (iscorrect) =>{
          const correctSet = {
              "}" : "{",
              "]" : "[",
               ")" : "(" }
          
          let stack = [];
          let isCorrectString = true;
         
         iscorrect.forEach( (k,idx) => {
             if(k === "[" || k === "{" || k === "("){
                 stack.push(k)
             }else{
                 if(correctSet[k] === stack.at(-1)){
                     stack.pop()
                 }else{
                     isCorrectString = false
                 }
             }
        })
         
         return stack.length === 0 && isCorrectString
     }
     
     let answer = 0; 
    
     for(let i = 0; i<s.length; i++){
          const chagedS = [...s.slice(i,s.length),...s.slice(0,i)]
          const isCorrectString = greatMatch(chagedS)
          
          answer += (isCorrectString)
     }
    
    return answer
}
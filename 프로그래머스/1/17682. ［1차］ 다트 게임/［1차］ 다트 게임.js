function solution(dartResult) {
    let stack = [];
    let alphabet = ["S", "D", "T"];
    
    for(let i=0; i<dartResult.length; i++){
           
          if(alphabet.includes(dartResult[i])){
              let alp;
              dartResult[i] == "S" ? alp = 1  : dartResult[i] == "D" ? alp = 2 : alp = 3;
              if( dartResult[i-1] == 0 && dartResult[i-2] == 1){
                stack.push(Math.pow(10, alp) ); 
              }else{
                stack.push(Math.pow(dartResult[i-1], alp) ); 
              }
                      
          }  
        
          if(dartResult[i] == "*"){
              let num = stack.pop()*2;
              if(stack.length > 0){
                  let num2 = stack.pop()*2;
                  stack.push(num2)
              }
              stack.push(num)
              console.log(stack)
          }
        
         if(dartResult[i] == "#"){
             let num = stack.pop()*(-1);
             stack.push(num);
         }
        
     }
    
    return stack.reduce((acc,x) => acc+x)
}
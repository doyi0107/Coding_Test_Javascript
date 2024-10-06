function solution(arr) {
    let result = arr.reduce((acc,x,i) => {
        return (acc*x)/gcd(acc,x)
    }) 
    
    return result
    
}

const gcd = (a,b) => {
     while(b !== 0){
         let temp = b;
         b = a%b;
         a = temp;
      }
    
    return a   
}
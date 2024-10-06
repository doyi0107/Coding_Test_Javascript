function solution(arr) {   
    return arr.reduce((acc,x,i) => { return (acc*x)/gcd(acc,x) })
}

const gcd = (a,b) => {
     while(b !== 0){
         let temp = b;
         b = a%b;
         a = temp;
      }
    
    return a   
}
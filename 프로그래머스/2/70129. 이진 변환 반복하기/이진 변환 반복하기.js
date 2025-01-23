function solution(s) {
      let result = [0,0]
      let num = s;
      while(num != 1){
          let array = num.split('').filter((x) => {return x !=="0" }).length;
           result[1] += num.length - array;
           result[0]++;
           num = array.toString(2)   
      }
    
       return result;
      
}
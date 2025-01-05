function solution(prices) {
    let result = Array(prices.length).fill(0) 

    for(let i=0; i<prices.length; i++){
            for(let k=i+1; k<prices.length; k++){
                if(prices[i]<=prices[k]){    
                    result[i]++
                  }        
                  else{
                      if(i != prices.length){
                          result[i]++;
                          break;
                      }
                      break;
                 }
            }  
    }
    
        return result
}
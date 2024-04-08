function solution(nums) {
//     소수의 특징 - 약수가 1과 자기 자신 외의 없다.
    let count = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
              for(let k=j+1; k<nums.length; k++){        
                  isPrime(nums[i]+nums[j]+nums[k])
                  console.log(nums[i]+nums[j]+nums[k])
                  if(  isPrime(nums[i]+nums[j]+nums[k])){count++}
         }        
       }       
    }  
    
   // 소수 판별
        function isPrime(num) {
            for (let i = 2; i < num; i++)
                if (num % i === 0) {return false} 
          
                     return true
  
        }
    
    return count
    
}
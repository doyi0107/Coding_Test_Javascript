function solution(numbers, target) {
    let count = 0; 
    dfs(0,0)
     function dfs(sum, index){
         if(numbers.length === index){
             if(target === sum){
                 count++;
             }
             return 
         }
         dfs(sum + numbers[index], index+1)
         dfs(sum - numbers[index], index+1)
     }
    
    return count
}
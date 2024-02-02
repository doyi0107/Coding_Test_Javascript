function solution(sequence, k) {
    //누적합 스킬 
    let perfix = [0],sum = 0,left = 0,right = 0,result = [];
    let maxL = Infinity
    sequence.forEach((x,i) => {
       perfix.push(x + perfix[i])
    })
    
    while(left <= right){
         sum = perfix[right] - perfix[left] 
        

        if(sum === k){
          let answerL = right - 1 - left
            if(maxL > answerL){
                 result = [left, right - 1]
                 maxL = answerL
            }

        }
        
        if(sum < k){
            right++;
        }else{
            left++;
        }
    }
    
    return result
}
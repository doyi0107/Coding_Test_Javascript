function solution(n,a,b){
    let answer = 1;

    while(a !== b){
        
        // 다음 대진표에서의 순서
         a = Math.round(a/2);
         b = Math.round(b/2);
         answer++; 
        
        // 순서가 같아지는 순간 나옴 
        if(a == b){
            // 순서가 같을 때가 아니라 서로 붙게되는 라운드를 구하는 거기 때문에 -1
             answer--;
         }
    }
    
    return answer;
}
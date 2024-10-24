function solution(n) {
     if(n == 1 || n == 2) return n;
    
    //초기값설정
     let dp = [1,2];
    
     for(let i=2; i<n; i++){
         //피보나치 점화식 적용
         dp[i] = (dp[i-1] + dp[i-2])%1234567
     }
    
     return dp[n-1]
}
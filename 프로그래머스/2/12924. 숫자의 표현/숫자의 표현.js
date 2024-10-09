function solution(n) {
    let sum=1, right=1;
    var result = 0;
    
    for(let left=1; left<=n; left++){
        while(sum<n){
            right++;
            sum+=right;
        }
        
        if(sum==n) result++;
        sum -=left;       
    }
    
    return result;
}
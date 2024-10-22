function solution(k, tangerine) {
    let map = {},cnt = 0;
    
    for(let t of tangerine){
        map[t] = (map[t] || 0) + 1
    }
    
    let sortedmap = Object.values(map).sort((a,b) => b-a);
    console.log(sortedmap)
    
    for(let count of sortedmap){
        k -= count;
        cnt++;
        if(k<=0) break;
    }
    
    return cnt;
} 
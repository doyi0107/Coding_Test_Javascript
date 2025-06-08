function solution(N, stages) {
    let result = [];
    
    for(let K=0; K<N; K++){
       let bottom = stages.filter((x) => x >= K+1 ).length
       let top = stages.filter((x) => x == K+1).length
       result.push([K+1,top/bottom])
    }
    
    return result.sort((a,b) => b[1] - a[1]).map((x) => x[0])
    
}
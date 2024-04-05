function solution(N, stages) {
     let result = [];
     for(let i=1; i<=N; i++){
         let reach = stages.filter((x) => x == i ).length;
         let under = stages.filter((x) => x >= i).length;
         result.push([i,reach/under])
     }
    
    return result.sort((a,b) => b[1]-a[1]).map((x) => x[0])
}
function solution(k, m, score) {
    let sortedScore = score.sort((a,b) => b-a);
    let count = 0
    for(let i=(m-1); i<score.length; i+=m){
        count += (sortedScore[i]*m)
    }
    
    return count
}
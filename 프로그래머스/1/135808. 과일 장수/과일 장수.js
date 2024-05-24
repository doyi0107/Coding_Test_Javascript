function solution(k, m, score) {
    let sortarr = score.sort((a,b) => b-a);
    let result = 0;
    
    for(let i = 0; i<score.length; i+=m){
        let slicearr = sortarr.slice(0+i,m+i)
        if(slicearr.length === m){
            result += slicearr[slicearr.length-1]*m
        }
    }
    
    return result
}
function solution(n, lost, reserve) {
        let newLost = lost.filter( (x) => !reserve.includes(x)).sort((a,b) => a-b);
        let newReserve = reserve.filter((x) => !lost.includes(x)).sort((a,b) => a-b);
    
        for(let i=0; i<newReserve.length; i++){
           let index = newLost.findIndex((x) => x == newReserve[i]+1 || x == newReserve[i]-1)
           if(index !== -1){
               newLost.splice(index,1);
           }
        }
    
    return n-newLost.length
}
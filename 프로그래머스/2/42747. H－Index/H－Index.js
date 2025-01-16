function solution(citations) {
    let result;
    let sortedCit = [...citations].sort((a,b) => b-a);
    
    for(let i = sortedCit[0]; i>=0; i--){  
        let more = [];
        let less = [];
        sortedCit.forEach((x) => x >= i ? more.push(x) : less.push(x))
        if(more.length >= i &&  less.every((x) => x<= i)){
            result = i;
            break;
        }
    }

    return result;
}
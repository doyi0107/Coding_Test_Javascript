function solution(n) {
    let answer = n+1;
    while(true){
        if(countOne(n) === countOne(answer))return answer;
        else answer++;
    }
}

const countOne = (n) => {
    let numOfOne = 0;
    let binary = [];
    
    binary = n.toString(2)
    
    for(let char of binary) if(char === '1')numOfOne++;
    return numOfOne;

}
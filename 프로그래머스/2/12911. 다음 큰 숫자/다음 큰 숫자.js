function solution(n) {
    // n보다 큰수
    let answer = n+1;
    
    // n보다 큰 수 중에 1의 개수 같은 거 찾기 
    while(true){
        if(countOne(n) === countOne(answer))return answer;
        // 1의 개수 틀리면 answer증가
        else answer++;
    }
}

const countOne = (n) => {
    let numOfOne = 0;
    let binary = [];
    
    //n 이진수로 만들기 
    binary = n.toString(2)
    
    // binary에서 1의 개수 
    for(let char of binary) if(char === '1')numOfOne++;
    return numOfOne;

}
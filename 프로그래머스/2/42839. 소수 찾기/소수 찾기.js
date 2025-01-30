function solution(numbers) {
    let result = 0; 
    let num = [];
    let n = numbers.length
    
    function generateNumbers(current, remaining) {
        if (current.length > 0) {
            num.push(Number(current)); // 생성된 숫자를 Set에 추가
        }

        for (let i = 0; i < remaining.length; i++) {
            generateNumbers(current + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
        }
    }

    generateNumbers("", numbers); // 모든 가능한 조합 생성
    let numCopy = [...new Set(num)];
    
   
    for(let i=0; i<numCopy.length; i++){
        let isPrime = true;
  
        if(numCopy[i] < 2) continue;
        for(let j=2; j<=Math.sqrt(numCopy[i]); j++){
            if(numCopy[i]%j==0 ) {
                isPrime = false;
                break;
            }
        }
        if( isPrime) result++;
    }

    
    return result
}
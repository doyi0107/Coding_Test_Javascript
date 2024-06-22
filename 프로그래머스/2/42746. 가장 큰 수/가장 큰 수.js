function solution(numbers) {
    // numbers 배열의 각 숫자를 문자열로 변환
    let strNumbers = numbers.map(String);
    
    // 문자열 배열을 정렬
    strNumbers.sort((a, b) => (b + a) - (a + b));

    let answer = strNumbers.join('');
    return answer[0] === '0' ? '0' : answer;
}



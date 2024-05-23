function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false; // 문자열의 길이가 4 또는 6이 아니면 false를 반환
    }
    
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i]) || s[i] === " ") { // 숫자가 아니거나 공백이 포함되어 있으면
            return false; // false를 반환하고 함수를 종료
        }
    }
    
    return true; // 모든 조건을 만족하면 true를 반환
}

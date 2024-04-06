function solution(s) {
    let result = '';
    let isEven = true;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            result += ' ';
            isEven = true; // 공백을 만나면 다음 문자는 짝수번째 문자로 시작하게 됨
        } else {
            if (isEven) {
                result += s[i].toUpperCase();
            } else {
                result += s[i].toLowerCase();
            }
            isEven = !isEven;
        }
    }

    return result;
}
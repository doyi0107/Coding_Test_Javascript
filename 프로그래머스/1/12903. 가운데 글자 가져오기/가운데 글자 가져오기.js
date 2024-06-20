function solution(s) {
    let S = s.length
    return S%2 == 1 ? s[Math.floor(S/2)] : s[(S/2)-1] + s[(S/2)]
}
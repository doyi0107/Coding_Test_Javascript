function solution(word) {
    let vowel = ['A','E','I','O','U'];
    let arr = [781, 156, 31, 6, 1];
    let answer = 0;
    
    for(let i=0; i<word.length; i++){
        answer += vowel.indexOf(word[i])*arr[i]+1
    }
    
    return answer
    
    
}
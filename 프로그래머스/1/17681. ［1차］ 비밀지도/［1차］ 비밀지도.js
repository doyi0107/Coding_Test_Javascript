function solution(n, arr1, arr2) {
    let answer = [];

    for (let i = 0; i < arr1.length; i++) {
        const binaryNumber = (arr1[i] | arr2[i]).toString(2);
        const setDigit = String(binaryNumber).padStart(n, "0");
        const str = setDigit.replace(/[1-9]/g, "#").replace(/[0]/g, " ");
        answer.push(str);
    }
    return answer;
}
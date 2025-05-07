function solution(n, arr1, arr2) {
    let answer = [];

    for (let i = 0; i < arr1.length; i++) {
        let binaryNumber = (arr1[i] | arr2[i]).toString(2);
        let row = ' '.repeat(n-binaryNumber.length).concat(binaryNumber).replace(/1/gi,'#').replace(/0/gi,' ');
        answer.push(row)
    }
    return answer;
}
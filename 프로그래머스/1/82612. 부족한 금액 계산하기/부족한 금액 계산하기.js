function solution(price, money, count) {
    let sum = 0, answer = 0;
   for(let i=1; i<=count; i++){
        sum += price
        answer += sum
     }    

    return answer-money > 0 ? answer-money : 0
}
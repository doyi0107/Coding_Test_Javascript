function solution(num) {
    let sum = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i; // i와 num / i가 같지 않은 경우에만 더함
        }
    }
    return sum;
}
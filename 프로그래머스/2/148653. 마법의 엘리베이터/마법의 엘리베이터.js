function solution(storey) {
    let count = 0;
    let digits = String(storey).split('').map(Number).reverse();
    
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] > 5 || (digits[i] == 5 && (digits[i + 1] || 0) >= 5)) {
            count += 10 - digits[i];
            if (i == digits.length - 1) {
                count++;
            } else {
                digits[i + 1]++;
            }
        } else {
            count += digits[i];
        }
    }
    
    return count;
}

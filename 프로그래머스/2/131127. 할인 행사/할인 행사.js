function solution(want, number, discount) {
    let answer = 0;

    // 원하는 제품과 수량을 객체로 변환
    let wantMap = {};
    for (let i = 0; i < want.length; i++) {
        wantMap[want[i]] = number[i];
    }

    // 10일 동안의 할인 정보 검사
    for (let i = 0; i <= discount.length - 10; i++) {
        let discountMap = {};

        // 현재 10일 동안의 할인 정보를 객체로 변환
        for (let j = 0; j < 10; j++) {
            let product = discount[i + j];
            if (discountMap[product]) {
                discountMap[product]++;
            } else {
                discountMap[product] = 1;
            }
        }

        // 원하는 제품과 수량이 할인 정보와 일치하는지 확인
        let isMatch = true;
        for (let key in wantMap) {
            if (!discountMap[key] || discountMap[key] < wantMap[key]) {
                isMatch = false;
                break;
            }
        }

        if (isMatch) {
            answer++;
        }
    }

    return answer;
}

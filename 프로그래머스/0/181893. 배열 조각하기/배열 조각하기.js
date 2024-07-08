function solution(arr, query) {
    let result = arr; // 초기에는 result가 arr 전체를 가리키도록 설정해야 합니다.
    query.forEach((x, i) => {
        if (i % 2 === 0) {
            // 짝수 인덱스일 때: 앞에서부터 자름
            result = result.slice(0, query[i] + 1); // 여기서 result를 사용해야 합니다.
        } else {
            // 홀수 인덱스일 때: 뒤에서부터 자름
            result = result.slice(query[i], result.length); // 여기서 result를 사용해야 합니다.
        }
    });
    
    return result;
}

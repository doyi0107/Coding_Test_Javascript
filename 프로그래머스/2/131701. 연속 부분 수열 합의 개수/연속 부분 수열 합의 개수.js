function solution(elements) {
  let uniqueSums = new Set(); // 중복을 제거하기 위한 Set 구조 사용
    const n = elements.length;
    
    // 원형 수열을 다루기 위해 원본 수열을 두 배로 확장
    const extendedElements = elements.concat(elements);
    
    // 가능한 모든 연속 부분 수열의 합을 찾음
    for (let length = 1; length <= n; length++) { // 부분 수열의 길이 1부터 n까지
        for (let start = 0; start < n; start++) { // 시작 인덱스는 원본 수열의 범위 내에서
            let sum = 0;
            for (let i = start; i < start + length; i++) {
                sum += extendedElements[i];
            }
            uniqueSums.add(sum); // 계산된 합을 Set에 추가
        }
    }
    
    return uniqueSums.size;// 중복을 제외한 합의 개수 반환
}
function solution(sequence, k) {
    var answer = [];
    let prefix = [0]       // sequence의 합을 나타낸 배열
    let maxL  = Infinity   // 정답으로 나온 부분수열의 길이를 나타내는 변수 
    sequence.forEach((num,i)=>{
        prefix.push(num+prefix[i])
    })

    let left = 0
    let right = 0


    while(left<=right){
        let sum = prefix[right] - prefix[left]  // sequence[left] 부터 sequence[right-1]까지의 수열의 합.
        if(sum === k) {
            // 정답수열을 찾았을때 수열의 길이를 체크하고 가장 작은길이의 수열로 변환. 
            let nowL = right-1 - left 
            if(maxL > nowL){
                answer = [left,right-1]
                maxL = nowL
            }
        }
        if(sum<k){
            right++
        }else left++
    }

    return answer;
}
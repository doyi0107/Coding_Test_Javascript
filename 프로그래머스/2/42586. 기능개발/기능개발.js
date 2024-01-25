function solution(progresses, speeds) {
    let arr = [],result = [];
    
    progresses.forEach( (x,i) => {
        let count = 0; 
          while(x < 100){
             x += speeds[i]
              count += 1
          }
         arr.push(count)
     })
    

   
 for (let i = 0; i < arr.length; i++) {

        let count = 1; // 자기 자신도 포함하므로 1로 시작
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] >= arr[j]) {
                count += 1;
            } else {
                break;
            }
        }

        // 3)
       result.push(count);

        // 4)
        i += count - 1; // 이미 계산한 작업은 건너뛰기
    }
    
       return result
 
}
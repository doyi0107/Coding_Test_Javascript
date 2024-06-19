
function solution(scoville, K) {
  let count = 0;
  scoville.sort((a,b) => a-b)
  while(  scoville[0] < K){
      scoville.sort((a,b) => a-b)
      let temp = scoville.shift();
      scoville[0] = temp + (scoville[0]*2)
      count++;
      if(scoville.length <= 1){
          return -1
      }
  }

    return count
}
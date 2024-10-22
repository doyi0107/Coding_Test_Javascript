function solution(k, tangerine) {
    let count = 0,result = 0, object = {}; 

  // 숫자와 배열 안의 숫자 개수 매치하기
   tangerine.forEach((x,idx) => {
       object[x] === undefined ? object[x] = 1: object[x]++  
   })      
    
    //여기서 2차원 배열로 바뀜
   let gulnum = Object.entries(object).sort( ([,a] , [,b]) => b - a);
   
    gulnum.forEach ((i,index) => {  
           if(count < k)
           { count += Number(gulnum[index][1]);  result++; }       
    })

   return result
}

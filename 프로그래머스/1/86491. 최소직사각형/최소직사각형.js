function solution(sizes) {
       let maxArr = [];
       let minArr = []
      
       for(let i=0; i<sizes.length; i++){
           let max = Math.max(sizes[i][0],sizes[i][1]);
           maxArr.push(max);
           let min = Math.min(sizes[i][0],sizes[i][1]);
           minArr.push(min);
       }
       console.log(maxArr,minArr)
       return Math.max(...maxArr)*Math.max(...minArr)

}
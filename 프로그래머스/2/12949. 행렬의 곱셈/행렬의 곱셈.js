function solution(arr1, arr2) {
     let resultArr = []; 
     for(let i=0; i<arr1.length; i++){
          let subArr = [];
         for(let j=0; j<arr2[0].length; j++){
             let add = 0;
             for(let k=0; k<arr2.length; k++){
                 add += arr1[i][k]*arr2[k][j]
             }          
             subArr.push(add)
         }
         resultArr.push(subArr);
     }
    
    return resultArr
}
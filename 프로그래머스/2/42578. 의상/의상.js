function solution(clothes) {
    let object = {}, cnt = 1 , answer = 1;
    
    // 똑같은 옷 종류의 개수, 객체로 표현해주기
    for(let i=0; i<clothes.length; i++){  
        const type = clothes[i][1]
        if(object[type] != undefined){
            object[type] += 1;
        }else{
            object[type] = cnt;
         }
    }

    // 옷의 종류가 하나 이상일 때 조합공식 활용하기 
   if(Object.keys(object).length > 1){
       for(let key in object){   
           let value = object[key]
           answer *= (value+1)         
       }
   }

    
    return Object.keys(object).length > 1 ? answer-1 : clothes.length
}
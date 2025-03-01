function solution(babbling) {
    let yes = ["aya", "ye", "woo", "ma"];
     let arr = babbling
    
    for(let i=0; i<babbling.length; i++){
        for(let j=0; j<yes.length; j++){
             if(babbling[i].includes(yes[j])){               
                 arr[i] = babbling[i].replace(yes[j], " ")
              }
         }
     }
    
    return arr.filter((x) => x.trim() == "").length;
}
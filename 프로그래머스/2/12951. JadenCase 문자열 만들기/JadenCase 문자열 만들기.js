function solution(s) {
    let arrs = s.split(" ")
    let result = [];
   
    for(let i=0; i<arrs.length; i++){
        let word = "";
        arrs[i].split('').forEach((x,i) => i !=0 ? word+=x.toLowerCase() : word+=x.toUpperCase());
        result.push(word)
    }
       
    return result.join(" ")
}
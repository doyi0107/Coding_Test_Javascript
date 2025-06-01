function solution(phone_number) {
    let result = phone_number.split("");
    for(let i=0; i<phone_number.length-4; i++){
        result[i] = "*"
    }
        
    return result.join("")
  
}
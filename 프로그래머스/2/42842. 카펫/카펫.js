function solution(brown, yellow) {
    let a,result = [];
    for(let i=1; i<=yellow; i++){
        a = yellow/i
        if(2*(a+i)+4 == brown){
            result[0] = a+2;
            result[1] = i+2;
            break;
        }
    }
    
    return result
    
}
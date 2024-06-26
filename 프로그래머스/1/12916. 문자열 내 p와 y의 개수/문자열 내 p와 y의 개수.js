function solution(s){
    let arr = [0,0]
    for(let i = 0; i<s.length; i++){
        if(s[i] == 'p' || s[i] == 'P'){
            arr[0]++;
        }else if(s[i] == 'y' || s[i] == 'Y'){
             arr[1]++;
        }
    }
    
    return arr[0] == arr[1] ? true : false 
}
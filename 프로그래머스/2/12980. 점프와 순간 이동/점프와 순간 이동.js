function solution(n)
{ 
    let result = 0;
    let copyN = n;
    while(copyN > 0){
        if(copyN%2 == 0){
            copyN /= 2
        }else{
            result++;
            copyN -= 1;
        }
    }
    
    return result;
    
   
}
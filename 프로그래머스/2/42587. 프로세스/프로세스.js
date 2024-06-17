function solution(priorities, location) {
    let answer = 0;
    let twoarr = priorities.map((x,i) =>  [x,i])
    let arr = []
    
    console.log(twoarr)
    for(let i=0; i<priorities.length; i++){
        let temp = twoarr.shift();
        console.log( temp)
        if(twoarr.some((x)=> temp[0] < x[0])){
             twoarr.push(temp)
        }else{
            arr.push(temp)
            if(arr[answer][1] == location) break;
            else answer ++;
        }
    }
    
    return answer+1;
}
function solution(order) {
    let index = 0;
    let stack = [];
    
    for(let i = 1; i <= order.length; i++){
        stack.push(i)
        
        while(order[index] === stack[stack.length-1] && stack.length !== 0 ){
            stack.pop();
            index++;
        }
    }
    
    return index
}
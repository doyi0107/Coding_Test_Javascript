function solution(people, limit) {
    let result = 0; 
    people.sort((a,b) => a-b);
    let stack = [];
    
    while(people.length > 0){
        stack.push(people.pop());
        let light = people[0];
        if(stack[stack.length-1] + light <= limit){
            result++;
            people.shift();
        }else{
            result++;
        }
        
    }
    
    return result;
}
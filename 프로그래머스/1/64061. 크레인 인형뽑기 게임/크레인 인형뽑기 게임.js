function solution(board, moves) {
    let stack = [],count = 0; 
    moves.forEach((x,i) => {
        for(let k = 0; k < board.length; k++){
            if(board[k][x-1] !== 0){
                 stack.push(board[k][x-1])
                 board[k][x-1] = 0;
                 break;
            }
        }
    })
    


    const num = (stack) => {
        console.log(stack)
      for(let x = 0; x < stack.length; x++){
           if(stack[x] === stack[x+1]){
                stack.splice(x,2) 
                count += 2 
                num(stack)
            }
      }
      return count
    }
    
     num(stack);
    
    return count
}
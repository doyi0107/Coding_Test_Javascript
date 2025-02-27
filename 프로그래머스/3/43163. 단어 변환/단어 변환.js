function solution(begin, target, words) {
    if(!words.includes(target)) return 0
    let visited = Array(words.length).fill(false)
    
    const changeWord = (word,node) => {
          let count = 0; 
          for(let i=0; i<word.length; i++){
              if(node[i] !== word[i]){
                  count++;
              }
          }
        
          if(count == 1) return count
        
         return -1
    }
    
    
     let queue = [[begin,0]]
     
     while(queue.length){
         let [node,step] = queue.shift();
         
         if(node == target) return step
         
         for(let i=0; i<words.length; i++){
              if(!visited[i] && changeWord(words[i],node) !== -1){
                  visited[i] = true;
                  queue.push([words[i], step+1])
              }
        }
     }
    
    return 0
}
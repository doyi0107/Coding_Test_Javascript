function solution(n, computers) {
    let result = 0; 
    let visited = Array(n).fill(false);
    
    const bfs = (start) => {
        let queue = [start];
        visited[start] = true;
        
        while(queue.length){
            let node = queue.shift();
            
            for(let i=0; i<n; i++){
            if(computers[node][i] == 1 && computers[i][node] ==1 && !visited[i]){
                visited[i] = true;
                queue.push(i)
                }
            }
        }
    }
    
    for(let i=0; i<n; i++){
        if(!visited[i]){
            bfs(i)
            result++;
        }
    }
   
    
  
    return result;
    
}
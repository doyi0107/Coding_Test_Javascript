function solution(maps) {
     let n = maps.length;
     let m = maps[0].length;
     let dy = [-1,1,0,0];
     let dx = [0,0,-1,1];
     let visited = Array.from({length:n}, () => Array(m).fill(false));
    
     let queue = [[0,0,1]];
    
     while(queue.length){
         let [x,y,cnt] = queue.shift(); 
         
         if(x == n-1 && y == m-1) return cnt;
         
          for(let i=0; i<4; i++){
              let newX = x + dx[i];
              let newY = y + dy[i];
              if(newX >= 0 && newY >=0 && newX < n && newY < m && !visited[newX][newY] && maps[newX][newY] == 1){
                  visited[newX][newY] = true;
                  queue.push([newX,newY, cnt+1]);
              }
          }
     }
    
     return -1;
    
}
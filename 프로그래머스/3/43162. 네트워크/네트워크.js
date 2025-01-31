function solution(n, computers) {
    let visited = Array(n).fill(false); // 방문 여부 체크 배열
    let result = 0; // 네트워크 개수
    
    const bfs = (start) => {
        let queue = [start];
        visited[start] = true;
        
        while (queue.length) {
            let node = queue.shift();
            
            for (let i = 0; i < n; i++) {
                if (computers[node][i] === 1 && !visited[i]) {
                    visited[i] = true;
                    queue.push(i);
                }
            }
        }
    };
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            bfs(i);
            result++; // 새로운 네트워크 발견 시 카운트 증가
        }
    }
    
    return result;
}

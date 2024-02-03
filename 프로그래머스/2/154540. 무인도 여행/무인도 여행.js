function solution(maps) {
    let newMaps = maps.map((x) => x.split(''))
    let result = [];
    let cols = maps[0].length;
    let rows = maps.length; 
    let direct = [[0,1],[1,0],[0,-1],[-1,0]]
    
    const dfs = (rowIdx,colIdx,count) => {
        if(rowIdx < 0 || colIdx < 0 || rowIdx >= rows || colIdx >= cols){
            return count
         }
        
        if(newMaps[rowIdx][colIdx] === "X"){
            return count
        }
        
        count += Number(newMaps[rowIdx][colIdx])
        newMaps[rowIdx][colIdx] = 'X'
        
        for(let i = 0; i<4; i++){
            count = dfs(rowIdx + direct[i][0], colIdx + direct[i][1],count)
        }
        
        return count
    }
    
    
    
     for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols ; j++) {
                if (newMaps[i][j] === "X") {
                    continue;
                }
                result.push(dfs(i, j, 0));
            }
        }
        
    return result.length ? result.sort((a,b) => a-b) : [-1]
}
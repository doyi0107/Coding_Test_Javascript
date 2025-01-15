let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
let n = Number(input[0]);
let arr = input[1].split("");
let directions = [[1, 0], [0, -1], [-1, 0], [0, 1]];//남, 서, 북, 동
let x = 0 , y = 0;
let path = [[x,y]];
let cntDirection = 0;


for(let i=0; i<n; i++){
    if(arr[i] == 'R'){
       cntDirection = (cntDirection+1) % 4;
    }else if(arr[i] == 'L'){
        cntDirection = (cntDirection + 3) % 4;
    }else{
        x += directions[cntDirection][0];
        y += directions[cntDirection][1];
        path.push([x,y]);
    }
}



let minX = Math.min(...path.map(([x,y]) => x));
let minY = Math.min(...path.map(([x,y]) => y));
let maxX = Math.max(...path.map(([x,y]) => x));
let maxY = Math.max(...path.map(([x,y]) => y));


let height = maxX - minX + 1;
let width = maxY - minY +1;

let maze = Array.from({length:height}, () => Array(width).fill('#'));

for(let [x,y] of path){
    maze[x - minX][y - minY] = '.'
}

maze.forEach( x => console.log(x.join('')))




function solution(t, p) {
    let count = 0;
    for(let i = 0; i <= t.length-p.length; i++){
        let tslice = t.slice(i, i+p.length)
        console.log(+tslice)
        if( +tslice <= +p ){count++;}
     }
    
    return count 
}


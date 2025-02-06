function solution(lottos, win_nums) {    
    let zeroSub =  lottos.filter((x) => x !== 0 );
    
    let same = lottos.length - zeroSub.length;
    let diff = zeroSub.length;
    
    for(let i=0; i<zeroSub.length; i++){
        if(win_nums.indexOf(zeroSub[i]) !== -1){          
            same++;
        }else diff--;
    }
        
    return [ same == 0 ? 6 : 7-same, diff == 0 ? 6: 7-diff ]
    
}
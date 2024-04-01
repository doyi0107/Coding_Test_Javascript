function solution(food) {
     let halfood = food.map( (x,i) => {
        let result = Math.floor(x/2)
        return i !== 0 ? String(i).repeat(result) : ""
    }).join('');
    
    return halfood + '0' + halfood.split('').reverse().join('')
}
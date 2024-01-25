function solution(nums) {
    let divide = nums.length/2
    const hashmap = new Map()

    for(let x of nums){
        if(hashmap.has(x)){
             hashmap.set( x, hashmap.get(x)+1)
         }else{
             hashmap.set( x, 1)
         }     
    }

    return hashmap.size < divide ? hashmap.size:  divide
}
function solution(arr) {
    let sortedarr = [...arr].sort((a,b) => (a-b))
    let result = arr.filter((x) => x !== sortedarr[0])
    //
    return  arr.length > 1 ? result : [-1]
}
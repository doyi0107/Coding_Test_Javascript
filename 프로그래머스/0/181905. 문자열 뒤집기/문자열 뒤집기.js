function solution(my_string, s, e) {
    let result01 = my_string.slice(0,s)
    let result02 = my_string.slice(s,e+1).split("").reverse().join("")
    let result03 = my_string.slice(e+1,my_string.length+1)
    return result01+result02+result03
}
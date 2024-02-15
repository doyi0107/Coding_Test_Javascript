function solution(my_string, overwrite_string, s) {
    let over_len = overwrite_string.length;
    let array = my_string.split('')
     array.splice(s,over_len,overwrite_string)
    return array.join('')
}
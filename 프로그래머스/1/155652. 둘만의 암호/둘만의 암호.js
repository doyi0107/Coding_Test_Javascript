function solution(s, skip, index) {
    let not_skip = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                      "u", "v", "w", "x", "y", "z"].filter( (x) => !skip.includes(x))
    
    return s.split('').map((x) => not_skip[(not_skip.indexOf(x)+index)%not_skip.length]).join('')
}
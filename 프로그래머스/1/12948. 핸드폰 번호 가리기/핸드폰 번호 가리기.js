function solution(phone_number) {
    return phone_number.split('').map((x,i) => { return i<phone_number.length-4 ?  x.replaceAll(x ,'*') : x }).join('')
}
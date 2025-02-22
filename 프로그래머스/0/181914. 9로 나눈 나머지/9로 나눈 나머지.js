function solution(number) {
   return number.split("").reduce((acc,x) => acc+Number(x),0)%9
}
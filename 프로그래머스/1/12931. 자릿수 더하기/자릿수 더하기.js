function solution(n)
{
    return String(n).split('').reduce((acc,i) => { return acc+Number(i)},0 )
}
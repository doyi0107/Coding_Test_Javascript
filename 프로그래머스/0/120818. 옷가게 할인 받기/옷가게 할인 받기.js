function solution(price) {
    return price >= 500000 ? parseInt(price-(price*20/100)) : (price >= 300000 ? parseInt(price-(price*10/100)) : 
                                                     (price >= 100000 ? parseInt(price-(price*5/100)) : price) )
}
import java.util.*;
import java.io.*;

class Solution {
    public int[] solution(int[] numbers) {
        //초기값 -1로 셋팅하기
        int[] result = new int[numbers.length];
        Arrays.fill(result, -1);
        
        //뒤에 있는 값 넣어서 비교하기 위한 stack(인덱스 저장)
        Stack<Integer> stack = new Stack<>();
        
        for(int i=0; i<numbers.length; i++){
            int num = numbers[i];
            
            while(!stack.isEmpty() && numbers[stack.peek()] < num){
                result[stack.pop()] = num;
            }
            
            stack.push(i);
        }        
        
        return result;
    }
}

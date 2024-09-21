import java.util.*;

class Solution {
    public int[] solution(int N, int[] stages) {
          double[][] result = new double[N][2];
          int[] arr = new int[N];
          int sum = 0;
          int[] answer = new int[N];
        
         for(int i=0; i<stages.length; i++){
             if(stages[i] != N+1){
                arr[stages[i]-1]++; 
              }
          }
        
         for(int i=0; i<result.length; i++){
             if(stages.length-sum > 0){
               result[i][0] = (double)arr[i]/(stages.length-sum);        
             }else{
                 result[i][0] = 0;
             }
              result[i][1] = i+1;
              sum += arr[i];
        }

        
        Double[][] boxedResult = new Double[N][2];
        for (int i = 0; i < N; i++) {
            boxedResult[i][0] = result[i][0];
            boxedResult[i][1] = result[i][1];
        }

        Arrays.sort(boxedResult, (a,b) -> Double.compare(b[0],a[0]));
    
        for(int i=0; i<N; i++){
           answer[i] = boxedResult[i][1].intValue();
        }
        
        return  answer;
        
    }
}
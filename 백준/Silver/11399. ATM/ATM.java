import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;


public class Main {
  public static void main(String[] args) throws IOException {
       BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
       int n = Integer.parseInt(br.readLine());
       String[] arr = br.readLine().split(" ");
       int[] waitingLine = new int[n];

       //String배열 int배열로 변환하기
       for(int i=0; i<n; i++){
         waitingLine[i] = Integer.parseInt(arr[i]);
       }

       Arrays.sort(waitingLine);
       int sum = 0;
       int[] sumArr = new int[n];
        // 마지막 총합 구하기
        int result = 0;

       // 각 사람마다 걸리는 시간 배열에 집어 넣기
       for(int i=0; i<n; i++){
           sum+= waitingLine[i];
           sumArr[i] = sum;
           result += sumArr[i];
       }

       System.out.println(result);

  }
}
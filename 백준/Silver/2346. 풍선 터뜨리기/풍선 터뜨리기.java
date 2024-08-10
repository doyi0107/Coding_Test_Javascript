import java.io.*;
import java.util.*;

public class Main {
  public static void main(String[] args) throws IOException {
          BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
          StringBuffer sb = new StringBuffer();
          Deque<int[]> deque = new ArrayDeque<>(); // int[] 배열을 저장하는 Deque
          int n = Integer.parseInt(br.readLine());

          String[] strArr = br.readLine().split(" ");
          int idx = 0;

          for(int i=0; i<n; i++){
            idx += 1;
            int[] arr = new int[2]; // 크기 2의 정수 배열 생성
            arr[0] = Integer.parseInt(strArr[i]); // 첫 번째 요소에 입력된 정수 저장
            arr[1] = idx; // 두 번째 요소에 인덱스 저장
            deque.add(arr); // 배열을 deque에 추가
          }

          int[] Array = deque.poll();
          sb.append(Array[1]);
          while(!deque.isEmpty()){
            if(Array[0]>0){
              for(int i=0; i<Array[0]-1; i++){
                deque.add(deque.poll());
              }
              Array = deque.poll();
              sb.append(" ").append(Array[1]);

            }else{
              Array[0] = Math.abs(Array[0]);
              for(int i=0; i<Array[0]-1; i++){
                deque.addFirst(deque.pollLast());
              }
              Array = deque.pollLast();
              sb.append(" ").append(Array[1]);
            }

          }

          System.out.println(sb);

  }
}
import java.io.*;
import java.lang.reflect.Array;
import java.util.*;


public class Main {
  public static void main(String[] args) throws IOException {
         BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
         StringTokenizer st = new StringTokenizer(br.readLine());
         int M = Integer.parseInt(st.nextToken());
         int L = Integer.parseInt(st.nextToken());

         String[] arr = br.readLine().split(" ");
         int[] placeWater = new int[arr.length];

         for(int i=0; i<arr.length; i++){
           placeWater[i] = Integer.parseInt(arr[i]);
         }

         Arrays.sort(placeWater);

         // 하나의 테이프가 붙일 수 있는 범위 설정
         int range = (int)(placeWater[0]-0.5+L);
         // 테이프는 무조건 한번은 필요하니깐 1부터 
         int cnt = 1;

         for(int i=0; i<placeWater.length; i++){
                if(placeWater[i] > range){
                       cnt++;
                       range = (int)(placeWater[i]-0.5+L);
                }
         }

         System.out.println(cnt);
  }
}
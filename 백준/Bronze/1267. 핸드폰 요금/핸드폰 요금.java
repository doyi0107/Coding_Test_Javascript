import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
     public static void main(String[] args) throws IOException {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            int n = Integer.parseInt(br.readLine());
            StringBuilder sb = new StringBuilder();
            int young = 0;
            int min = 0;

            StringTokenizer st = new StringTokenizer(br.readLine());
            for(int i =0; i<n; i++){
              int a = Integer.parseInt(st.nextToken());
              young += 10;
              min += 15;
              if(a/30 >= 1 ){
                young += (10*(a/30));
              }else{
                young += 0;
              }

              if(a/60 >= 1 ){
                min += (15*(a/60));
              }else{
                min += 0;
              }

            }

            if(young < min){
              sb.append("Y").append(" ").append(young);
            }else if(young > min){
                sb.append("M").append(" ").append(min);
            }else{
              sb.append("Y").append(" ").append("M").append(" ").append(min);
            }

             System.out.println(sb);
     }


}
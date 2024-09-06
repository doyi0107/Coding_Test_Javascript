import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
     public static void main(String[] args) throws IOException {
         BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
         String[] subArr = br.readLine().split("-");
         int result = 0;

         for(int i=0; i<subArr.length; i++){
           int temp = 0;
           if(subArr[i].contains("+")){
             String[] plusArr = subArr[i].split("\\+");
             for(String plus : plusArr){
               temp += Integer.parseInt(plus);
             }
           }else{
             temp += Integer.parseInt(subArr[i]);
           }

           if(i == 0) result = temp;
           else{
             result -= temp;
           }

         }

       System.out.println(result);



     }
}
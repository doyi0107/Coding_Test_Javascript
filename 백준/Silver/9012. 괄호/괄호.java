import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.Stack;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // 6 문자열로 받은 거 숫자로 바꾸기
        int n = Integer.parseInt(br.readLine());
        // 정답 출력 코드
        StringBuilder answer = new StringBuilder();

        for(int i = 0; i < n; i++) {
            Stack<Character> stack = new Stack<>();
//           괄호 묶음 한줄씩 읽어오기
            String bracket = br.readLine();
//            괄호 묶음 문자열로 바꾸기
            char[] array = bracket.toCharArray();
            boolean isValid = true;

            for (char c : array) {
                if (c == '(') {
                    stack.push(c);
                } else if (c == ')') {
                    if (stack.isEmpty()) {
                        isValid = false;
                        break;
                    }else{
                        stack.pop();
                    }
                }
            }

            if (!isValid || !stack.isEmpty()) {
                answer.append("NO").append('\n');
            } else {
                answer.append("YES").append('\n');
            }
        }

        System.out.println(answer.toString());
    }
}

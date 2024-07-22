import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int n = Integer.parseInt(br.readLine()); // 테스트 케이스의 수
    StringBuilder answer = new StringBuilder();

    for (int i = 0; i < n; i++) {
      Stack<String> stringStack = new Stack<>();
      String line = br.readLine();
      String[] words = line.split(" ");

      // 분리된 단어 stack에 넣기
      for (String word : words) {
        stringStack.push(word);
      }

      // 각 케이스 번호 추가
      answer.append("Case #").append(i + 1).append(": ");

      // stack에 넣은 값 반대로 빼기
      while (!stringStack.isEmpty()) {
        answer.append(stringStack.pop());
        if (!stringStack.isEmpty()) {
          answer.append(" ");
        }
      }

      // 각 케이스 끝나고 줄바꿈
      answer.append("\n");
    }

    // 전체 결과 출력
    System.out.print(answer.toString());
  }
}

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] input = br.readLine().split(" ");
        int plus = Integer.parseInt(input[0]);  // 한 번 누를 때 걸리는 시간
        int seqMsg = Integer.parseInt(input[1]);  // 같은 키를 연속으로 눌렀을 때 추가로 걸리는 시간

        // 입력 받은 문자 메시지
        String inputMsg = br.readLine();

        // 자판기 배열
        String[] alphabet = {
            "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"
        };

        int sum = 0;
        int previousKey = -1;

        // 문자 하나씩 처리
        for (char c : inputMsg.toCharArray()) {
            if (c == ' ') {
                sum += plus;  // 공백은 1번 눌렀을 때 처리 (상황에 따라 다름)
                previousKey = -1;
            } else {
                for (int i = 0; i < alphabet.length; i++) {
                    if (alphabet[i].indexOf(c) != -1) {
                        int presses = alphabet[i].indexOf(c) + 1;  // 몇 번 눌러야 해당 문자가 나오는지 계산

                        if (previousKey == i) {
                            sum += seqMsg;  // 이전 키와 같은 키면 추가 시간
                        }
                        
                        sum += plus * presses;  // 누르는 시간 추가
                        previousKey = i;
                        break;
                    }
                }
            }
        }

        System.out.println(sum);
    }
}

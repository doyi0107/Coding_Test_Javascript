function solution(players, callings) {
    // 각 선수의 현재 순위를 저장하는 객체
    let playerIndices = {};
    players.forEach((player, index) => {
        playerIndices[player] = index;
    });
    
    // callings를 처리하여 순위 변경
    callings.forEach(calling => {
        // 호출된 선수의 현재 순위
        let currentIndex = playerIndices[calling];
        
        // 만약 선수가 현재 1위가 아니면, 한 칸 앞선 선수와 순위 교체
        if (currentIndex > 0) {
            let prevPlayer = players[currentIndex - 1];
            
            // players 배열에서 선수 위치 교체
            players[currentIndex - 1] = calling;
            players[currentIndex] = prevPlayer;
            
            // playerIndices 객체에서 선수 순위 업데이트
            playerIndices[calling]--;
            playerIndices[prevPlayer]++;
        }
    });

    return players;
}

function solution(begin, target, words) {
    let result = 0;
    let visited = Array(words.length).fill(false);

    if (!words.includes(target)) return 0;

    const changeWord = (word, curWord) => {
        let count = 0;
        let index;
        for (let i = 0; i < word.length; i++) {
            if (curWord[i] !== word[i]) {
                index = i;
                count++;
            }
        }
        return count === 1 ? index : -1;
    };

    let queue = [[begin, 0]]; // 현재 단어와 변환 횟수를 함께 저장

    while (queue.length > 0) {
        let [curWord, steps] = queue.shift();

        if (curWord === target) return steps; // 목표 단어 도달 시 변환 횟수 반환

        for (let i = 0; i < words.length; i++) {
            if (!visited[i] && changeWord(words[i], curWord) !== -1) {
                visited[i] = true;
                queue.push([words[i], steps + 1]);
            }
        }
    }

    return 0;
}

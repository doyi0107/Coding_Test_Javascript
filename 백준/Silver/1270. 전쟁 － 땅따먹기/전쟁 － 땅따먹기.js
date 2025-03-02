const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];
rl.on("line", (line) => {
    lines.push(line);
}).on("close", () => {
    let N = Number(lines[0]);

    for (let i = 1; i <= N; i++) {
        let arr = lines[i].split(" ").map(Number);
        let totalVotes = arr[0];
        let soldiers = arr.slice(1); // 첫 번째 원소 제외 (병사 소속 번호들)

        // **Boyer-Moore Majority Vote Algorithm 적용**
        let candidate = null;
        let count = 0;

        for (let soldier of soldiers) {
            if (count === 0) {
                candidate = soldier;
                count = 1;
            } else if (candidate === soldier) {
                count++;
            } else {
                count--;
            }
        }

        // **과반수인지 확인**
        let finalCount = soldiers.reduce((acc, soldier) => acc + (soldier === candidate ? 1 : 0), 0);

        if (finalCount > Math.floor(totalVotes / 2)) {
            console.log(candidate);
        } else {
            console.log("SYJKGW");
        }
    }
});

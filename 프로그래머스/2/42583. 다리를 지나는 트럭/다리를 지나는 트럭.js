function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = Array(bridge_length).fill(0);
    let totalWeightOnBridge = 0;

    while (bridge.length > 0) {
        time++;
        totalWeightOnBridge -= bridge.shift(); 

        if (truck_weights.length > 0) {
            if (totalWeightOnBridge + truck_weights[0] <= weight) {
                // 새 트럭을 다리에 올립니다
                let temp = truck_weights.shift();
                bridge.push(temp);
                totalWeightOnBridge += temp;
            } else {
                // 다리 무게 제한으로 새 트럭을 올리지 못할 때
                bridge.push(0);  // 빈 공간을 추가합니다
            }
        }
    }

    return time;
}

// 예시를 보니까 다리를 지난 트럭, 다리를 건너는트럭 동시에는 안가고 한개 움직일때마다 1초인듯

function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let n = truck_weights.length;
  let bridge_after = []; // 다리를 지난 트럭
  let visited = Array.from({ length: bridge_length }, () => 0);
  let bridge_weight = 0;
  while (bridge_after.length !== n) {
    answer += 1;
    let pop_data2 = visited.shift();
    visited.push(0);

    if (pop_data2 !== 0) {
      bridge_after.push(pop_data2);
      bridge_weight -= pop_data2;
    }
    if (bridge_weight + truck_weights[0] <= weight) {
      let pop_data = truck_weights.shift();
      visited[visited.length - 1] = pop_data;
      bridge_weight += pop_data;
    }
  }
  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));

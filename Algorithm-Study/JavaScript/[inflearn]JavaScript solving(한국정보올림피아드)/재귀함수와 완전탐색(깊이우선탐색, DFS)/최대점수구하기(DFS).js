function solution(N, M, score, time) {
  let maxV = 0;
  function DFS(L, scoreSum, timeSum) {
    // 제한시간 넘어가면 return
    if (timeSum > M) {
      return;
    }
    // 제한시간에 return되지 않고 끝까지 왔다면
    if (L === N) {
      if (maxV < scoreSum) {
        maxV = scoreSum;
      }
    } else {
      DFS(L + 1, scoreSum + score[L], timeSum + time[L]);
      DFS(L + 1, scoreSum, timeSum);
    }
  }
  DFS(0, 0, 0);
  return maxV;
}

let score = [10, 25, 15, 6, 7];
let time = [5, 12, 8, 3, 4];
console.log(solution(5, 20, score, time));

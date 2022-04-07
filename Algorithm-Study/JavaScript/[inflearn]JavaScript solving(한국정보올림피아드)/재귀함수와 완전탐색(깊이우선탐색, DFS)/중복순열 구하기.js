// 다중 for문 방법
// function solution(N, M) {
//   let cnt = 0;
//   for (let i = 1; i < N + 1; i++) {
//     for (let j = 1; j < N + 1; j++) {
//       console.log(i, j);
//       cnt += 1;
//     }
//   }
//   return cnt;
// }

// console.log(solution(3, 2));

// 재귀 방법
function solution(N, M) {
  let result = [];
  let tmp = Array.from({ length: M }, () => 0);
  function DFS(L) {
    if (L === M) {
      result.push(tmp.slice());
    } else {
      for (let i = 1; i <= N; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);
  return result;
}

console.log(solution(3, 2));

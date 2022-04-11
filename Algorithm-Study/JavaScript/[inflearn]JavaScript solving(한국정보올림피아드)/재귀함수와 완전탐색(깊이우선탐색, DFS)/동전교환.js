function solution(N, arr, M) {
  let result = M + 1;
  function DFS(L, sum) {
    if (result < L) return;
    if (sum > M) return;
    if (sum === M) {
      console.log("sum>M", L, sum);
      result = Math.min(result, L);
      return;
    } else {
      for (let i = 0; i < N; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return result;
}

let N = 3;
let arr = [1, 2, 5];
let M = 15;
console.log(solution(N, arr, M));

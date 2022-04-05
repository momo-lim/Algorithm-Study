function solution(N, arr) {
  let result = "NO";
  let total = arr.reduce((a, b) => a + b, 0);
  let flag = 0;
  function DFS(L, sum) {
    if (flag) return;
    if (L === N) {
      if (total - sum === sum) {
        result = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return result;
}

let n = 6;
let arr = [1, 3, 5, 6, 7, 10];

console.log(solution(n, arr));

function solution(C, N, arr) {
  let maxV = 0;
  function DFS(L, sum) {
    console.log(L, sum);
    if (sum > C) {
      return;
    }
    if (L === N) {
      if (maxV < sum) {
        maxV = sum;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return maxV;
}

let c = 259;
let n = 5;
let arr = [81, 58, 42, 33, 61];
console.log(solution(c, n, arr));

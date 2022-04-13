function solution(N, K, arr) {
  let tmp = Array.from({ length: K }, () => 0);
  let result = [];
  function DFS(L, S) {
    if (L === K) {
      // if (tmp.reduce((a, b) => a + b) % 6 === 0) {
      //   result.push(tmp.slice());
      // }
      console.log(tmp);
    } else {
      for (let i = S; i < N; i++) {
        tmp[L] = arr[i];
        console.log(i, S);
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 0);
  return result;
}
arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr));

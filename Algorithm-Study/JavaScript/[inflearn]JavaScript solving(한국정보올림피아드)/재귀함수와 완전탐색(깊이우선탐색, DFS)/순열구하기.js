function solution(N, M, arr) {
  let visited = Array.from({ length: N }, () => 0);
  let tmp = Array.from({ length: M }, () => 0);
  let result = [];
  function DFS(L) {
    if (L === M) {
      result.push(tmp.slice());
    } else {
      for (let i = 0; i < N; i++) {
        if (visited[i] === 0) {
          visited[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          visited[i] = 0;
          tmp[L] = 0;
        }
      }
    }
  }

  DFS(0);
  return result.length;
}
let arr = [3, 6, 9];
console.log(solution(3, 2, arr));

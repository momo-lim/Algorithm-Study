function solution(N, M) {
  let tmp = Array.from({ length: M }, () => 0);
  let result = [];
  function DFS(L, S) {
    if (L === M) {
      result.push(tmp.slice());
      console.log(tmp);
    } else {
      for (let i = S; i <= N; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return result.length;
}

console.log(solution(4, 2));

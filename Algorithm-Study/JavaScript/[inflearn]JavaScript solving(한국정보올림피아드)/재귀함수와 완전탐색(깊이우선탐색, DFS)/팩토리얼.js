function solution(N) {
  let result = 1;
  function DFS(L) {
    if (L === 1) {
      return;
    } else {
      result = result * L;
      DFS(L - 1);
    }
  }
  DFS(N);
  return result;
}

console.log(solution(5));

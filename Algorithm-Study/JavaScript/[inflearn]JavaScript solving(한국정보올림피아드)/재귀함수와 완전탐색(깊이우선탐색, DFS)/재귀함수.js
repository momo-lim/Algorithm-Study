function solution(N) {
  let result = [];

  function DFS(L) {
    if (L == 0) {
      return;
    }

    DFS(L - 1);
    result.push(L);
  }

  DFS(N);
  console.log(result.join(" "));
}
solution(3);

function solution(N) {
  let result = [];
  let visited = Array.from({ length: N + 1 }, () => 0); // 0 0 0 0
  function DFS(v) {
    if (v === N + 1) {
      let tmp = "";
      for (let i = 1; i <= N; i++) {
        if (visited[i] === 1) {
          tmp += i + " ";
        }
      }
      result.push(tmp);
    } else {
      visited[v] = 1;
      DFS(v + 1);
      visited[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
  return result;
}

console.log(solution(3));

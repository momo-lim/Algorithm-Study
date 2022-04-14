function solution(N, M, arr) {
  let graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
  let visited = Array.from({ length: N + 1 }, () => 0);
  let path = [];
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  function DFS(v) {
    if (v === N) {
      console.log(path);
      console.log(v);
    } else {
      for (let i = 1; i <= N; i++) {
        if (graph[v][i] && visited[i] === 0) {
          visited[i] = 1;
          path.push(i);
          DFS(i);
          visited[i] = 0;
          path.pop();
        }
      }
    }
  }
  path.push(1);
  visited[1] = 1;
  DFS(1);
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, 9, arr));

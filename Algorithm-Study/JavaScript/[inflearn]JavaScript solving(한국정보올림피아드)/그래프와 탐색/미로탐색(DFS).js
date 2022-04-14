function solution(arr) {
  let result = 0;
  let visited = Array.from(Array(arr.length), () =>
    Array(arr[0].length).fill(0)
  );

  let dx = [1, -1, 0, 0];
  let dy = [0, 0, -1, 1];
  function DFS(i, j) {
    if (i === 6 && j === 6) {
      result += 1;
      return;
    } else {
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];

        if (
          nx >= 0 &&
          nx <= 6 &&
          ny >= 0 &&
          ny <= 6 &&
          arr[nx][ny] === 0 &&
          visited[nx][ny] === 0
        ) {
          visited[nx][ny] = 1;
          DFS(nx, ny);
          visited[nx][ny] = 0;
        }
      }
    }
  }
  visited[0][0] = 1;
  DFS(0, 0);
  return result;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));

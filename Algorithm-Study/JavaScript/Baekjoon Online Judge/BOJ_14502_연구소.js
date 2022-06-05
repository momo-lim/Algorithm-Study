const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
// 행 N
// 열 M
const [N, M] = input
  .shift()
  .split(" ")
  .map((item) => Number(item));
let maps = input.map((item) => item.split(" ").map((item) => Number(item)));

let maxResult = 0;
const dr = [-1, 1, 0, 0]; // 상하좌우
const dc = [0, 0, -1, 1];

// 바이러스를 퍼트리고 안전영역을 구하는 BFS
function BFS(arr) {
  let cnt = 0;
  let queue = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }
  while (queue.length) {
    let [cr, cc] = queue.shift();
    for (let k = 0; k < 4; k++) {
      let nr = cr + dr[k];
      let nc = cc + dc[k];
      if (nr >= 0 && nr < N && nc >= 0 && nc < M && arr[nr][nc] === 0) {
        arr[nr][nc] = 2;
        queue.push([nr, nc]);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 0) {
        cnt += 1;
      }
    }
  }
  return cnt;
}

// 벽을 모든 경우의 수로 세우는 DFS
// 벽은 무조건 3개를 설치해야해서 3개 세우고 나면 그때마다 깊은복사로 maps를 전달하여 BFS를 돌린다.
function DFS(r, c, cnt) {
  if (cnt === 3) {
    let arr = maps.map((item) => [...item]);
    let result = BFS(arr);
    if (maxResult < result) {
      maxResult = result;
    }

    return;
  } else {
    for (let i = r; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (maps[i][j] === 0) {
          maps[i][j] = 1;
          DFS(i, j, cnt + 1);

          maps[i][j] = 0;
        }
      }
    }
  }
}

DFS(0, 0, 0);
console.log(maxResult);

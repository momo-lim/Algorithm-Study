function solution(n) {
  var answer = [];
  let graph = Array.from({ length: n }, () => Array(n).fill(0));

  dr = [1, 0, -1]; // 하 우 좌대각선
  dc = [0, 1, -1];
  function DFS(i, j, current, dir, N) {
    if (N === n) {
      return;
    }
    if (dir === 3) {
      dir = 0;
    }

    let nr = i + dr[dir];
    let nc = j + dc[dir];

    if (nr >= 0 && n > nr && nc >= 0 && n > nc && graph[nr][nc] === 0) {
      graph[nr][nc] = current;
      DFS(nr, nc, current + 1, dir, N);
    } else {
      DFS(i, j, current, dir + 1, N + 1);
    }
  }
  DFS(-1, 0, 1, 0, 0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] !== 0) {
        answer.push(graph[i][j]);
      }
    }
  }

  return answer;
}

console.log(solution(4));

// 위의 코드는 런타임 에러

function solution(n) {
  dr = [1, 0, -1]; // 하 우 좌대각선
  dc = [0, 1, -1];
  var answer = [];
  let graph = Array.from({ length: n }, () => Array(n).fill(0));

  let r = -1;
  let c = 0;
  let dir = 0;
  let cnt = 0;
  let len = n;
  while (len) {
    for (let i = 0; i < len; i++) {
      r = r + dr[dir];
      c = c + dc[dir];
      graph[r][c] = ++cnt;
    }
    len -= 1;
    dir += 1;
    if (dir === 3) {
      dir = 0;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] !== 0) {
        answer.push(graph[i][j]);
      }
    }
  }

  return answer;
}

// shift가 시간을 엄청 잡아먹는것 같다.
// number 변수를 이용해서 index를 참조하는걸로 바꾸니 시간초과를 벗어날수 있었다.

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
const [M, N] = input.shift().split(" ");
const maps = input.map((item) => item.split(" ").map((item) => Number(item)));
let result = 0;
let queue = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (maps[i][j] === 1) {
      queue.push([i, j, 0]);
    }
  }
}

function BFS() {
  let dr = [-1, 1, 0, 0]; // 상하좌우
  let dc = [0, 0, -1, 1];
  let number = 0;
  while (number !== queue.length) {
    let [r, c, day] = queue[number];
    number += 1;
    if (day > result) {
      result = day;
    }
    for (let i = 0; i < 4; i++) {
      let nr = r + dr[i];
      let nc = c + dc[i];

      if (0 <= nr && nr < N && 0 <= nc && nc < M && maps[nr][nc] === 0) {
        queue.push([nr, nc, day + 1]);
        maps[nr][nc] = 1;
      }
    }
  }
}

function check() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (maps[i][j] === 0) {
        result = -1;
        return;
      }
    }
  }
}

BFS();
check();
console.log(result);

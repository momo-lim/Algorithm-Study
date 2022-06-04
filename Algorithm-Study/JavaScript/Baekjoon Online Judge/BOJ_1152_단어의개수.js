// 브루트포스,DFS
// 집과 치킨집의 좌표값을 미리 구함
// DFS로 M개 만큼의 치킨집 경우의 수를 구하여 그때마다 각 치킨집이 집과의 거리가 얼마인지 저장
// M개의 치킨집과 집의 거리합을 최소값으로 구함

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
let [N, M] = input.shift().split(" ");
N = Number(N);
M = Number(M);
input = input.map((item) => item.split(" ").map((item) => Number(item)));

let house = [];
let chiken = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (input[i][j] === 2) {
      chiken.push([i, j]);
    } else if (input[i][j] === 1) {
      house.push([i, j]);
    }
  }
}

let currentChiken = [];
let minValue = 9999;
let visited = Array.from({ length: chiken.length }, () => 0);

function DFS(idx, cnt) {
  if (cnt === M) {
    let dis = Array.from({ length: house.length }, () => 9999);

    for (let i = 0; i < currentChiken.length; i++) {
      for (let j = 0; j < house.length; j++) {
        let absValue =
          Math.abs(currentChiken[i][0] + 1 - (house[j][0] + 1)) +
          Math.abs(currentChiken[i][1] + 1 - (house[j][1] + 1));
        if (absValue < dis[j]) {
          dis[j] = absValue;
        }
      }
    }
    let sum = dis.reduce((prev, curr) => prev + curr);
    if (minValue > sum) {
      minValue = sum;
    }

    return;
  } else {
    for (let i = idx; i < chiken.length; i++) {
      if (visited[i] === 0) {
        currentChiken.push(chiken[i]);
        visited[i] = 1;
        DFS(i, cnt + 1);
        visited[i] = 0;
        currentChiken.pop();
      }
    }
  }
}
DFS(0, 0);
console.log(minValue);

// 스타트팀과 링크팀을 재귀를 돌면서 같이 구해준다. (시간초과나서 스타트팀만 구하는쪽으로 변경)
// 조합으로 방문체크만 해주고 구해야할 인원수 cnt를 다 구하고 나면
// 방문한건 스타트팀, 그 외에는 자동으로 링크팀에 넣고 구해준다.

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\r\n");

const N = Number(input.shift());
input = input.map((item) => item.split(" ").map(Number));
let visited = Array.from({ length: N }, () => 0);
let minValue = 9999;

function DFS(cnt, k) {
  if (cnt === N / 2) {
    let start = [];
    let link = [];
    for (let i = 0; i < N; i++) {
      if (visited[i]) {
        start.push(i);
      } else {
        link.push(i);
      }
    }

    let start_sum = 0;
    let link_sum = 0;
    for (let i = 0; i < start.length; i++) {
      for (let j = i + 1; j < link.length; j++) {
        start_sum += input[start[i]][start[j]] + input[start[j]][start[i]];
        link_sum += input[link[i]][link[j]] + input[link[j]][link[i]];
      }
    }
    minValue = Math.min(minValue, Math.abs(start_sum - link_sum));

    return;
  } else {
    for (let i = k; i < N; i++) {
      if (visited[i] === 0) {
        visited[i] = 1;
        DFS(cnt + 1, i);
        visited[i] = 0;
      }
    }
  }
}

DFS(0, 0);
console.log(minValue);

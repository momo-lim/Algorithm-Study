// 문제를 잘못이해해서 엄청 오래걸린 문제
// 맨 왼쪽위가 W나 B일때 최소가 아니라 W나 B 였을때를 가정해서 2번씩 돌려보는것이었음

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
let [M, N] = input.shift().split(" ");
// let k = input[0][0];
let result = 99999;
function solution(a, b) {
  let k;
  for (let temp = 0; temp < 2; temp++) {
    let cnt = 0;
    if (temp === 0) {
      k = "W";
    } else {
      k = "B";
    }
    for (let i = a; i < a + 8; i++) {
      for (let j = b; j < b + 8; j++) {
        if (k !== input[i][j]) {
          // input[i][j] = k;
          cnt += 1;
        }
        if (j === b + 7) {
          continue;
        } else if (k === "B") {
          k = "W";
        } else if (k === "W") {
          k = "B";
        }
      }
    }
    if (result > cnt) {
      result = cnt;
    }
  }
}
for (let i = 0; i < M - 7; i++) {
  for (let j = 0; j < N - 7; j++) {
    solution(i, j);
  }
}
console.log(result);

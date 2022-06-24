// node.js 로는 풀수없는 문제?? 메모리초과

const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((item) => item.split(" ").map((item) => Number(item)));
const data = input[0];
const E = data[0];
const S = data[1];
const M = data[2];

let e = 0;
let s = 0;
let m = 0;
let cnt = 0;
while (true) {
  if (E === e && S === s && M === m) {
    console.log(cnt);
    break;
  }
  e += 1;
  s += 1;
  m += 1;
  cnt += 1;
  if (e > 15) {
    e = 1;
  }
  if (s > 28) {
    s = 1;
  }
  if (m > 19) {
    m = 1;
  }
}

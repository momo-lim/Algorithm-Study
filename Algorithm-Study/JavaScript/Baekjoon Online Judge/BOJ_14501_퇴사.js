const fs = require("fs");
input = fs.readFileSync("input.txt").toString().trim().split("\n");
let n = Number(input.shift());
let T = [];
let P = [];
for (let i = 0; i < input.length; i++) {
  let [a, b] = input[i].split(" ");
  T.push(Number(a));
  P.push(Number(b));
}

function solution(n) {
  let maxVal = 0;
  function DFS(L, Day, price) {
    if (Day > 0) {
      Day -= 1;
    }
    if (L === n) {
      if (maxVal < price) {
        maxVal = price;
      }
      return;
    } else {
      for (let i = L; i < n; i++) {
        if (Day === 0 && L + T[L] <= n) {
          DFS(i + 1, Day + T[L], price + P[L]);
        }
        DFS(i + 1, Day, price);
      }
    }
  }
  DFS(0, 1, 0);

  return maxVal;
}

console.log(solution(n));

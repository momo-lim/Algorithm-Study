const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = input[0];
input = input.slice(1);

function solution(i) {
  let stack = [];
  for (inputVal of input[i]) {
    if (inputVal === "(") {
      stack.push(inputVal);
    } else if (stack.length !== 0 && inputVal === ")") {
      stack.pop();
    } else {
      return "NO";
    }
  }
  if (stack.length >= 1) {
    return "NO";
  } else {
    return "YES";
  }
}

for (let i = 0; i < input.length; i++) {
  console.log(solution(i));
}

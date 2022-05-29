const fs = require("fs");

let input = fs.readFileSync("input.txt").toString();
let stack = [];
let result = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") {
    stack.push(input[i]);
  } else if (input[i] === ")") {
    if (input[i - 1] === ")") {
      stack.pop();
      result += 1;
    } else if (stack[stack.length - 1] === "(") {
      stack.pop();
      result += stack.length;
    }
  }
}
console.log(result);

/*
풀이
스택
for of 문으로 주어진 문제의 설명대로 순서대로 구현하면 된다.
*/
function solution() {
  for (let val of input) {

    if (val === "top") {
      if (stack.length ===0) {
        answer.push(-1);
      } else {
        answer.push(stack[stack.length-1]);
      }
      continue
    };


    if (val === "empty") {
      if(stack.length ===0) {
        answer.push(1)
      } else {
        answer.push(0)
      }
      continue
    };

    if (val === "size") {
      answer.push(stack.length)
      continue
    };

    if (val === "pop") {
      if (stack.length === 0) {
        answer.push(-1)
      } else {
        answer.push(stack.pop())
      }
      continue
    };

    if (val[1] === "u") {
      val = val.slice(5)
      stack.push(Number(val))
      continue
    }

  }
  
}

const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\r\n')

const answer = []
const N = input[0]
input = input.slice(1)

const stack = []

solution();
console.log(answer.join('\n'))
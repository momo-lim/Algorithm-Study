const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const inputV = input.map((num) => Number(num));
let maxV = 0;
let index = 0;

for (let i = 0; i < inputV.length; i++) {
  if (maxV < inputV[i]) {
    maxV = inputV[i];
    index = i;
  }
}
console.log(maxV);
console.log(index + 1);

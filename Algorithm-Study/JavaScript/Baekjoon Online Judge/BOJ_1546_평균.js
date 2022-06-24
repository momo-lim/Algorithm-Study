const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
let input2 = input[1].split(" ").map((num) => Number(num));

const maxV = Math.max(...input2);
let cal = 0;

for (let i = 0; i < input2.length; i++) {
  cal += (input2[i] / maxV) * 100;
}

let result = cal / input2.length;

console.log(result);

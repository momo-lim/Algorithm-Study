const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
const N = Number(input[0]);
const data = input
  .slice(1, input.length)
  .map((item) => item.split(" ").map((item) => Number(item)));
let result = "";
data
  .sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  })
  .forEach((item) => {
    result += `${item[0]} ${item[1]}\n`;
  });

console.log(result);

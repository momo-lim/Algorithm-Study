const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

const A = Number(input[0])
const B = Number(input[1])
const C = Number(input[2])

const num = A*B*C
const strNum = String(num)
const result = Array(10).fill(0)

for (let i=0;i<strNum.length;i++) {
  result[Number(strNum[i])] += 1
}


for (let i=0; i<result.length; i++) {
  console.log(result[i])
}
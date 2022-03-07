const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')


const N = Number(input[0])
const problem = input[1]
let result = 0
for (let i=0; i<problem.length; i++) {
  result += Number(problem[i])
}

console.log(result)
const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')


const K = Number(input[0])

input = input.slice(1).map(num => Number(num))

let result = [];

for (val of input) {
  if(val === 0) {
    result.pop()
  } else {
    result.push(val)
  }
}
if (result.length === 0) {
  console.log(0)
} else {

  const resultSum = result.reduce((prev,curr) => {
    return prev+curr
  })
  
  console.log(resultSum)
}
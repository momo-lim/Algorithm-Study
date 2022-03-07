const fs = require('fs');
// let input = fs.readFileSync('input.txt').toString().split('\n')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

const N = input[0]
const arr = input[1].split(' ').map(num =>  Number(num))
let maxV = arr[0]
let minV = arr[0]

for (let i = 0; i < N; i++) {
  if (maxV < arr[i]) {
    maxV = arr[i]
  }

  if (minV > arr[i]) {
    minV = arr[i]
  }
}
console.log(`${minV} ${maxV}`)
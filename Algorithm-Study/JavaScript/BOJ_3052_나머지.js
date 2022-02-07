const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const numList = [];



for (i =0;i<input.length;i++) {
  numList.push(Number(input[i])%42)
}

const resultnum = [];
numList.forEach((num) => {
  if (resultnum.indexOf(num)=== -1) {
    resultnum.push(num)
  }
})

console.log(resultnum.length)
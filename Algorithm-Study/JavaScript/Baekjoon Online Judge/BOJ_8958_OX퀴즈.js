/*
단계별 풀어보기 1차원 배열
for문으로 한 케이스씩 추출하고 거기서 for문을 한번 더 돌아서
O가 몇개씩 연속되는가를 체크하고 체크하면서 점수를 저장해 나간다.
*/

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = Number(input.shift())


for (let i=0; i<N; i++) {
  let score = 0
  let Ocnt = 0
  for (let j=0; j<input[i].length; j++) {
    if (input[i][j] ==='O') {
      Ocnt +=1;
      score += Ocnt
    } else if (input[i][j] === 'X') {
      Ocnt = 0;
    }
  };
  console.log(score)
};

// 한번에 모든 요구사항을 충족하려면 복잡하니까 일단 나눠서 하자, 아니다 같이해보자
// 행,열 합의 결과를 우선 하고
// 그 이후 대각선합을 구해보자
// 대각선은 i와 j가 같은값일때
// 역대각선은 i와 j의 합이 n과 같을때!

function solution(arr) {
  
  let sumI 
  let sumJ
  let sumD1 = 0;
  let sumD2 = 0;
  let maxI = 0;
  let maxJ = 0;
  for (let i = 0; i<arr.length; i++) {
    sumI = 0
    sumJ = 0
    for (let j = 0; j<arr.length; j++) {
      if (i === j) {
        sumD1 += arr[i][j]
      }
      if (i+j === n-1) {
        sumD2 += arr[i][j]
      }
      sumJ += arr[i][j]
      sumI += arr[j][i]
    }
    
    if (sumJ > maxJ) {
      maxJ = sumJ
    }
    if (sumI > maxI) {
      maxI = sumI
    }
  }

  return Math.max(maxI,maxJ,sumD1,sumD2)
}





let n = 5
let arr=[[10, 13, 10, 12, 15], 
[12, 39, 30, 23, 11],
[11, 25, 50, 53, 15],
[19, 27, 29, 37, 27],
[19, 13, 30, 13, 19]];
console.log(solution(arr,n));
// 홀수인 자연수들 모두 고르기... 2로 나눴을때 나머지 가 1인것
// 반복문 돌면서 홀수만 따로 새로만든 리스트에 넣기

function solution(arr) {
  let answer = []
  let odd = []
  let sum = 0;
  for (let i = 0; i<arr.length; i++) {
    if (arr[i] % 2 === 1) {
      odd.push(arr[i])
      sum += arr[i]
    }
  }
  answer.push(Math.min(...odd))
  answer.push(sum)

  return answer
}
let arr = [12,77,38,41,53,92,85]
console.log(solution(arr))
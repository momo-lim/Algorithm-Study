// 반복문 돌면서 문자 리터럴로 바꾸고 N과 비교


function solution(N,arr) {
  let answer = 0
  for (i of arr) {
    if (String(i)[1] === String(N)) {
      answer += 1
    }
  }
 return answer
}

const N = 3
const arr = [25,23,11,47,53,17,33]
console.log(solution(N,arr))
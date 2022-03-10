
function solution(s,r) {
  let answer = 0
  for (i of s) {
    if (i === r) {
      answer += 1
    }
  }

  return answer
}



let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));
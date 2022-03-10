// 현재 문자와 대문자로 바꾸는 값과 동일하면 원래 대문자이고 아니면 원래 소문자이다.

function solution(s) {
  let answer = 0;
  for (i of s) {
    if (i === i.toUpperCase()) {
      answer += 1
    }
  }
  return answer
}

let str="KoreaTimeGood";
console.log(solution(str));
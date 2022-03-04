// 세 수 중 가장 작은값
// 정렬 사용 금지

function solution(a,b,c){
  let answer;
  if (a > b) {
    if (b > c) {
      answer = c
    } else {
      answer = b
    }
  } else {
    answer = a
  }
  return answer;
}
console.log(solution(6,5,11))

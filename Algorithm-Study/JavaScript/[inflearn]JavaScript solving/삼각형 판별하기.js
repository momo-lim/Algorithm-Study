// 삼각형이 가능한가

function solution(a,b,c){
  let answer="YES", maxV;
  let sumV=a+b+c
  if (a < b) {
    maxV = b
  } else {
    maxV = a
  }
  if (maxV < c) {
    maxV = c
  }
  if ((sumV-maxV) <= maxV) {
    answer = "NO"
  }

  
  return answer
}
console.log(solution(13,33,17))

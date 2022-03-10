// "새로운 배열을 반환" 이라는 개념을 잘 숙지하자

function solution(str) {
  let strList = str.split("");
  let answer = strList.map((word) => {
    if (word ==='A') {
      return '#'
    }
    return word
  })
  return answer.join("")
}

let str="BANANA";
console.log(solution(str))
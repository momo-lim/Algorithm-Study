// 대문자면 소문자로 넣고 그외에는 다 대문자로 넣기

function solution(s) {
  let result = ""
  for (let i of s) {
    if (i === i.toUpperCase()) {
      result+=i.toLowerCase()
    } else {
      result+=i.toUpperCase()
    }
  }
  return result
}


console.log(solution("StuDY"))
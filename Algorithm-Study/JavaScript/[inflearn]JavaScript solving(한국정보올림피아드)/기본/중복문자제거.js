// indexOf는 전달받은 값의 최초위치를 반환한다.
// 그 최초위치와 현재 인덱스가 불일치 하다면 중복된 문자라는것(다른것이 한개 이상 존재)

function solution(str) {
  let result =''
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) {
      result += str[i]
    }
  }
  return result
}



console.log(solution("ksekkset"))
// 현재값과 내 앞의 값을 비교
// 끝에 빈 공백값을 줬어야 했는데 그냥 해도 된다. 왜지?/
// 자바스크립트 배열은 동적이다..?
// 인덱스 초과 시에 undefined가 뜨고 오류가 뜨지 않아서 답이 나왔다.

function solution(s) {
  let result = ""
  let count = 1

  for (let i = 0; i<s.length; i++) {
    if (s[i] === s[i+1]) {
      count += 1
    } else {
      result += s[i]
      if (count !== 1) {
        result += String(count)
      }
      count = 1
    }
  }
  return result

}

let str = 'KKHSSSSSSSE'
console.log(solution(str))
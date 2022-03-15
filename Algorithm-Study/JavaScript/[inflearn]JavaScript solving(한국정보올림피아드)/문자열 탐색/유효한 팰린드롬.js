// 알파벳 이외의 문자는 무시하라
// 알파벳인것만 담은 새로운 배열을 반환해야겠다. 이건 파이썬만 되는듯
// 정규표현식이라는 좋은게 있었다!!
// 모두 소문자로 바꾸고 소문자 알파벳이 아닌 것들은 ''로 바꿔주는 replace를 사용하자
// 다 바꿔줬다면 그걸 거꾸로 한 값과 같은지 검사하면 끝
//  reverse는 배열메서드이기 때문에 split으로 배열로 만들어 줘야 한다.
//  replace 정규식에 g가 없다면 하나만 바꿔버리고 g를 하면 전부다 바꿔준다.

function solution(str) {
  let s = str.toLowerCase().replace(/[^a-z]/g,'')
  let s2 = s.split('').reverse().join('')
  if (s === s2) {
    return 'YES'
  }
  return 'NO'
}


let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
// for 반복문을 한번씩 2번 돌리면서 체크
// t를 만나면 0으로 초기화 하고 그게 아니면 for 돌리면서 1씩 증가한 값을 push
// 2번째 for문 돌때 똑같이할건데 push 된 값보다 작은값이 나오면 바꿔준다.

function solution(s, t){
  let result = new Array(s.length).fill(0)
  let count = 0
  for (let i = 0; i<s.length; i++) {
    if (s[i] === t) {
      count = 0
      result[i] = 0
    } else {
      count ++
      result[i] = count
    }
  }

  for (let i = s.length-1; i>=0; i--) {
    if (s[i] === t) {
      count = 0
      result[i] = 0
    } else {
      count ++
      if (result[i] > count) {
        result[i] = count
      }
      // result[i] = Math.min(result[i],count)
    }
  }
  
  return result
}

let str="teachermode";
console.log(solution(str, 'e'));
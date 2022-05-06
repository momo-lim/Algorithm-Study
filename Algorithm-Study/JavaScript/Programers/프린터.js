// cnt는 인쇄한 횟수
// location이 뽑힐 차례가 아니면 cnt += 1 하고 location 1씩 감소
// location이 뒤로 간다면 현재 길이를 할당

function solution(priorities, location) {
  let answer = 0;
  let cnt = 0;
  while (true) {
    let max = Math.max(...priorities);
    let j = priorities.shift();
    if (j === max && location === 0) {
      cnt += 1;
      answer = cnt;
      break;
    } else if (j === max) {
      cnt += 1;
      location -= 1;
    } else {
      priorities.push(j);
      if (location === 0) {
        location = priorities.length - 1;
      } else {
        location -= 1;
      }
    }
  }
  return answer;
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));

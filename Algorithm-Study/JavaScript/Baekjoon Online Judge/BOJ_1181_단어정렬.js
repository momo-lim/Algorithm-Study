// 마지막에 join을 이용하지 않고 for문으로 하나씩 출력한다면 실행시간이 어어어어어엄청나게 늘어난다.

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
// 단어의 개수 N
const N = Number(input.shift());

input = new Set(input);
input = [...input];
let result = input.sort((a, b) => {
  // a가 b보다 길면 b를 앞에 보내기 위해 양수 return
  if (a.length > b.length) {
    return 1;
  }
  // b가 a보다 길면 a를 앞에 위치 시키기 위해 음수 return
  if (a.length < b.length) {
    return -1;
  }
  // 길이가 같을때는 사전순 조건으로 다중 정렬
  if (a.length === b.length) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
  }
});

console.log(result.join("\n"));

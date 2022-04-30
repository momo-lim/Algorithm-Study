// 해시는 Object 또는 Map 자료구조 사용
// 경우의 수를 식으로 계산
// 안입는다는 경우도 있으므로 각 +1
// 아무것도 안입는 다는 경우도 있으므로 구한 경우의수 마지막에 -1

function solution(clothes) {
  var answer = 1;
  let obj = new Map();
  for (let wear of clothes) {
    if (obj.has(wear[1])) {
      obj.set(wear[1], obj.get(wear[1]) + 1);
    } else {
      obj.set(wear[1], 2);
    }
  }
  for (let [_, val] of obj) {
    answer *= val;
  }

  return answer - 1;
}

console.log(
  solution([
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);

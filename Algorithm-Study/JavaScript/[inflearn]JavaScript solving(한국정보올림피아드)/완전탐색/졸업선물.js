// 반복문 돌면서 할인을 하나씩 적용하고 전부 사보자
// 사봤던 경우 중 가장 길이가 긴값?
// 최대한 많은 학생에게 선물을 사줬을 경우를 구해야 하니까 물건값+배송비 오름차순으로 정렬을 해야한다!

function solution(N, M, arr) {
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  let money;
  let product;
  let cnt;
  let result = 0;
  for (let i = 0; i < 5; i++) {
    product = arr.map((val) => val.slice()); // 깊은복사
    money = M;
    cnt = 0;
    product[i][0] = product[i][0] / 2;
    for (let j = 0; j < 5; j++) {
      if (money >= product[j][0] + product[j][1]) {
        money -= product[j][0] + product[j][1];
        cnt += 1;
      }
    }
    result = Math.max(result, cnt);
  }
  console.log(result);
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(5, 28, arr));

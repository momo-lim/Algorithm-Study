// 배열 생성하는법을 숙지하자
// 2중 반복문으로 한개의 점수씩 몇등인지 구하자


function solution(arr,n) {
  let rank = Array.from({length:n},()=>1)

  for (let i = 0; i<arr.length; i++) {
    for (let j = 0; j<arr.length; j++) {
      if (arr[i] < arr[j]) {
        rank[i] += 1

      }
    }
  }
  return rank;
}

let n = 5
let arr=[87, 89, 92, 100, 76];
console.log(solution(arr,n));
// 맞춘문제 나올때마다 count를 세주고 그 count를 점수로 합하면 됨

function solution(arr) {
  let result = 0
  let count = 0
  for (let i =0; i<arr.length; i++) {
    if (arr[i] === 1) {
      count += 1
      result += count
    } else {
      count = 0
    }
  }
  return result;
}



let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
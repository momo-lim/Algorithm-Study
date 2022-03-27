// 3장씩 뽑고 set에 다 넣어주자

function solution(N, K, arr) {
  let sumV = 0;
  let tmp = new Set();
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        tmp.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  console.log(tmp);
  // tmp.sort();
  let resultList = Array.from(tmp);
  console.log(resultList);
  resultList.sort((a, b) => b - a);
  console.log(resultList);
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));

// 완전탐색
// 1번 학생부터 4번학생까지 기준점이 되는 학생 하나를 잡고 나머지와 등수 비교
// 2중 for문 돌면서 i 학생이 몇등인지 먼저 구한 후에 j학생의 등수를 구한다.
// i학생이 j학생보다 등수가 높다면 다음 테스트로 이동해서 위의 조건을 반복
// 3번의 테스트가 i학생이 높다면(각 테스트마다 cnt) 멘토가 될수 있으므로 result += 1

function solution(N, M, arr) {
  let result = 0;
  // 학생수 N
  // 테스트 수 M
  // i는 학생번호
  // j는 비교할 학생번호
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (i === j) {
        continue;
      }
      let cnt = 0;
      for (let k = 0; k < M; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < N; s++) {
          if (arr[k][s] === i) {
            pi = s;
          } else if (arr[k][s] === j) pj = s;
        }
        if (pi > pj) {
          cnt += 1;
        }
      }
      if (cnt === M) {
        result += 1;
      }
    }
  }
  return result;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(4, 3, arr));

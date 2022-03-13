// 네 방향 탐색 하다가 하나라도 같거나 큰값이 있으면 봉우리가 아님

function solution(arr,n) {
  let count = 0;
  let dr = [-1,1,0,0]
  let dc = [0,0,-1,1]
  for (let i = 0; i<n; i++) {
    for (let j = 0; j<n; j++) {
      // 상 하 좌 우
      let flag = 1;
      for (let k = 0; k<4; k++) {
        let nr = i+dr[k]
        let nc = j+dc[k]
        if (0 <= nr && nr < n && 0 <= nc && nc < n && arr[nr][nc] >= arr[i][j]) {
          flag = 0
          break
        }
      } if (flag === 1) {
        count += 1
      }

    }
  }
  return count
}

let n = 5
let arr=[[5, 3, 7, 2, 3], 
[3, 7, 1, 6, 1],
[7, 2, 5, 3, 4],
[4, 3, 6, 4, 1],
[8, 7, 3, 5, 2]];
console.log(solution(arr,5));
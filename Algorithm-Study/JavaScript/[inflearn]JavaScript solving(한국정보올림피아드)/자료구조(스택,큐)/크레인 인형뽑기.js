// 세로로 탐색하다가 인형만나면 뽑고 break
// 스택에 쌓다가 맨위에 인형이 지금 뽑을거랑 같으면 둘다 없애주고 cnt += 2
// 크레인 번호가 인덱스 번호보다 1씩 크니까 -1 해주면됨
function solution(board, moves) {
  let stack = [];
  let cnt = 0;
  for (move of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] !== 0) {
        if (board[i][move - 1] !== stack[stack.length - 1]) {
          stack.push(board[i][move - 1]);
          board[i][move - 1] = 0;
          break;
        } else {
          stack.pop();
          board[i][move - 1] = 0;
          cnt += 2;
          break;
        }
      }
    }
  }
  return cnt;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));

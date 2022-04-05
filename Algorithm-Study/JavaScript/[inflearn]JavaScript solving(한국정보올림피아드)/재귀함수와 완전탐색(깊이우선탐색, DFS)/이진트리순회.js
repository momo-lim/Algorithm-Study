// v*2는 왼쪽자식 v*2+1은 오른쪽자식

function solution(v) {
  let 전위순회 = [];
  let 중위순회 = [];
  let 후위순회 = [];
  function DFS(v) {
    if (v > 7) {
      return;
    } else {
      // console.log(v);
      전위순회.push(v);
      DFS(v * 2);
      중위순회.push(v);
      DFS(v * 2 + 1);
      후위순회.push(v);
    }
  }
  DFS(v);
  return [전위순회, 중위순회, 후위순회];
}

console.log(solution(1));

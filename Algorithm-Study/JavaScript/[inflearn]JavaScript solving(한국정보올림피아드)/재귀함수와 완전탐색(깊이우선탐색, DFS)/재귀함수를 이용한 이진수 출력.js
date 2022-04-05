function solution(N) {
  let result = [];
  function DFS(N) {
    if (N === 0) return;
    else {
      DFS(parseInt(N / 2));
      result.push(N % 2);
    }
  }
  DFS(N);
  return result.join("");
}

let n = 11;
console.log(solution(n));

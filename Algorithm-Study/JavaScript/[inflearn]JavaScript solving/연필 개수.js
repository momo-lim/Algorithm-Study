
function solution(V) {
  let answer;
  let a = parseInt(V/12)
  let b = V%12

  if (b !== 0) {
    a ++
  }
  answer = a
  
  return answer
}


console.log(solution(178))
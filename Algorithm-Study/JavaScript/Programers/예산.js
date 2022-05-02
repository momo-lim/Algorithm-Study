// 최대한 많은 부서를 처리해줘야 하니까 비용이 낮은것부터 처리하면됨

function solution(d, budget) {
  var answer = 0;

  let data = d.sort((a, b) => a - b);

  for (let i = 0; i < data.length; i++) {
    if (budget - data[i] >= 0) {
      budget -= data[i];
      answer += 1;
    } else {
      break;
    }
  }
  return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9));

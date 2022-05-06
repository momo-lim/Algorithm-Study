function solution(progresses, speeds) {
  let answer = [];
  while (true) {
    if (progresses.length === 0) {
      break;
    }
    let cnt = 0;
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
    while (true) {
      if (progresses[0] >= 100) {
        progresses.shift();
        speeds.shift();
        cnt += 1;
      } else {
        break;
      }
    }

    if (cnt > 0) {
      answer.push(cnt);
    }
  }
  return answer;
}
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

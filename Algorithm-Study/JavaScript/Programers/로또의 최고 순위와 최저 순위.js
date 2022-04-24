function solution(lottos, win_nums) {
  var answer = [];

  let same_num = 0;
  let zero_num = 0;
  let max_val = 0;
  let min_val = 0;

  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.includes(lottos[i])) {
      same_num += 1;
    } else if (!lottos[i]) {
      zero_num += 1;
    }
  }

  if (Math.abs(same_num + zero_num - 7) === 7) {
    answer.push(6);
  } else {
    answer.push(Math.abs(same_num + zero_num - 7));
  }

  if (Math.abs(same_num - 7) === 7) {
    answer.push(6);
  } else {
    answer.push(Math.abs(same_num - 7));
  }

  return answer;
}

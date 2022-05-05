function solution(numbers) {
  var answer = [];
  let data_set = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i == j) {
        continue;
      } else {
        data_set.add(numbers[i] + numbers[j]);
      }
    }
  }
  answer = Array.from(data_set).sort((a, b) => a - b);

  return answer;
}

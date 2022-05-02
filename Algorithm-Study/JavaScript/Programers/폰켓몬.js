function solution(nums) {
  var answer = 0;
  let len = nums.length;
  let data_set = new Set(nums);
  if (len / 2 <= data_set.size) {
    answer = len / 2;
  } else {
    answer = data_set.size;
  }
  return answer;
}

console.log(solution([3, 1, 2, 3]));

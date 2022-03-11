function solution(arr) {
  let result = [];
  result.push(arr[0])
  for (let i = 1; i < arr.length; i++) {
    if (result[result.length-1] < arr[i]) {
      result.push(arr[i])
    }
  }

  return result.length
}

let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
function solution(str) {
  let result = [];
  for (let i = 0; i<str.length; i++) {
    if (str.indexOf(str[i]) === i) {
      result.push(str[i])
    }
  }
  return result
}

let str=["good", "time", "good", "time", "student"];
console.log(solution(str));
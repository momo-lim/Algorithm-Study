function solution(str) {
  let maxLength = str[0].length
  let result = ""
  for (let i of str) {
    if (maxLength < i.length) {
      maxLength = i.length
      result = i
    }
  }


  return result
}

let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
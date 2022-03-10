function solution(str) {
  let result = ""
  let mid = Math.floor(str.length/2)
  if (str.length%2 === 1) {
    result = str[mid]
  } else {
    result = str[mid-1]+str[mid]
  }
  return result
}



console.log(solution("good"));
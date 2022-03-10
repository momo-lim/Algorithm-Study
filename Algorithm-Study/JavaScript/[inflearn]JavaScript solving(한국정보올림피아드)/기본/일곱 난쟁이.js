function solution(arr) {
  let answer = arr
  let sumV = 0
  sumV = answer.reduce((a,b) => a+b, 0)
  for (let i = 0; i < answer.length; i++) {
    for (let j = i+1; j < answer.length; j++) {
      if (sumV - (answer[i]+answer[j]) === 100) {
        answer.splice(j,1)
        answer.splice(i,1)
      }
  }
}
return answer
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr))
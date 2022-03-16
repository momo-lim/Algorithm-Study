//  parseInt 하면 앞에 0을 날려버리고 숫자형으로 나오게된다... 숙지하자

function solution(str) {
  let num = str.replace(/[^0-9]/g,"")
  
  return parseInt(num)
  
}


let str="g0en2T0s8eSoft";
console.log(solution(str));
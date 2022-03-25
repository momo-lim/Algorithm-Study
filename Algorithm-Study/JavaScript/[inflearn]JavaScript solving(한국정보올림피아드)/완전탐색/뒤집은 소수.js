function isPrime(val) {
  if (val === 1) {
    return false
  }
  for (let i = 2; i<val; i++) {   
    if (val%i === 0) {
      return false
    }
  }
  return true
}

function solution(arr) {
  let result = [];
  for (x of arr) {

    let ChangeV = Number(String(x).split("").reverse().join(""))
    
    if (isPrime(ChangeV)) {
      result.push(ChangeV)
    }
  }
  return result.join(" ")
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
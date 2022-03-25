// 하나씩 꺼내서 리스트로 바꾼다음에 각 숫자 더한값 구하기
// 그게 몇번쨰 인덱스 인지도 따로 구해서 같은값일때 비교하기

function solution(N,arr) {
  let maxV = [];
  for (val of arr) {
    let list = String(val).split("")
    let sumV = list.reduce((stack,current) => {
      return Number(stack) + Number(current)
    },0)
    if (maxV[0] === sumV && maxV[1] < val) {
      maxV = [sumV,val]
      
    } else if(maxV < sumV) {
      maxV = [sumV,val]
    }
    
  }
  return maxV[1]
}
let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
// 내 식처럼 하나씩 양쪽에서 비교하면서 구할수도 있지만
// 문자를 배열로 만들어서 reverse한 값과 똑같다면 회문이라고 할수 있다.

function solution(s) {
s = s.toLowerCase();
let result = 'YES';
for (let i = 0; i<parseInt(s.length/2); i++) {
  
  if (result === 'NO') {
    break
  }
  else if (s[i] !== s[s.length-1-i]) {
    
    result = 'NO'
  }
  
}
return result
}

let s = 'gooG'
console.log(solution(s))
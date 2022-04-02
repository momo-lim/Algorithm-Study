// 닫는 괄호 나오면 무조건 팝
// 닫는괄호 나오고 내 앞도 똑같은 닫는괄호면 현재 닫는 괄호가 레이저가 아니라 쇠막대기의 끝임
// 그럴땐 잘려나간 마지막부분이니 같은쌍인 여는괄호 팝해주고 +1

function solution(s) {
  let stack = [];
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else if (s[i] === ")") {
      if (s[i - 1] === "(") {
        stack.pop();
        cnt += stack.length;
      } else if (s[i - 1] === ")") {
        stack.pop();
        cnt += 1;
      }
    }
  }
  return cnt;
}

let a = "(((()(()()))(())()))(()())";
console.log(solution(a));

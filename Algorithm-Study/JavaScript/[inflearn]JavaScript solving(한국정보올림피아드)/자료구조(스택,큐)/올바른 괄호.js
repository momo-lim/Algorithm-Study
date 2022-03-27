function solution(s) {
  let stack = [];
  for (i of s) {
    if (i === "(") {
      stack.push(i);
    } else if (i === ")" && stack.length > 0) {
      stack.pop();
    } else if (i === ")" && stack.length === 0) {
      return "NO";
    }
  }
  if (stack.length === 0) {
    return "YES";
  } else {
    return "NO";
  }
}

let a = "(()(()))(()";
console.log(solution(a));

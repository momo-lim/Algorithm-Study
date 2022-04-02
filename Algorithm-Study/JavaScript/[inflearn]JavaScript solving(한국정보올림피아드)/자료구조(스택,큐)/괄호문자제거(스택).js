function solution(s) {
  let stack = [];
  let result = "";
  for (i of s) {
    if (i === "(") {
      stack.push(i);
    } else if (i === ")") {
      stack.pop();
    }
    if (stack.length === 0 && i !== "(" && i !== ")") {
      result += i;
    }
  }
  return result;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));

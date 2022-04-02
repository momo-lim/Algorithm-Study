function solution(str) {
  let stack = [];
  for (let x of str) {
    if (!isNaN(x)) {
      stack.push(Number(x));
    } else {
      let rt = stack.pop();
      let lt = stack.pop();
      let result = 0;
      if (x === "+") {
        result = lt + rt;
      } else if (x === "*") {
        result = lt * rt;
      } else if (x === "-") {
        result = lt - rt;
      }
      stack.push(result);
    }
  }
  return stack;
}

let str = "352+*9-";
console.log(solution(str));

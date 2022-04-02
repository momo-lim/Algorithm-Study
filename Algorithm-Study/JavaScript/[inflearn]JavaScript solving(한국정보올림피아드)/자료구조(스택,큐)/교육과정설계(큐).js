function solution(need, plan) {
  let queue = [];
  for (i of plan) {
    if (need.indexOf(i) !== -1) {
      queue.push(i);
    }
  }
  if (need === queue.join("")) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));

function solution(need, plan) {
  let queue = need.split("");
  for (let i of plan) {
    if (queue.includes(i)) {
      if (i !== queue.shift()) {
        return "NO";
      }
    }
  }
  return "YES";
}
let c = "CBA";
let d = "CBDAGE";
console.log(solution(c, d));

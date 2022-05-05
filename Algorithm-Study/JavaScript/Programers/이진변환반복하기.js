function solution(s) {
  let answer = [];
  let ZeroCnt = 0;
  let change = s;
  let loop = 0;
  while (change != 1) {
    for (let i = 0; i < change.length; i++) {
      if (change[i] === "0") {
        ZeroCnt += 1;
      }
    }

    change = change.replace(/[0]/g, "").length.toString(2);
    loop += 1;
  }
  answer.push(loop, ZeroCnt);

  return answer;
}

console.log(solution("110010101001"));

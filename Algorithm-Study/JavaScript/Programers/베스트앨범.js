// 장르별로 2개씩
// 많이 재생된 장르 먼저
// 장르 내에서 재생된 곡 순서대로
// 재생횟수가 같다면 고유번호가 낮은(앞에 먼저 적힌) 곡부터
// 장르에 곡이 하나라면 그 곡만 선택

function solution(genres, plays) {
  var answer = [];
  let sequence = [];

  let obj = new Map();

  for (let x = 0; x < genres.length; x++) {
    if (obj.has(genres[x])) {
      obj.set(genres[x], obj.get(genres[x]) + plays[x]);
    } else {
      obj.set(genres[x], plays[x]);
    }
  }

  while (obj.size > 0) {
    let maxVal = 0;
    let maxKey = "";
    for (let [a, b] of obj) {
      if (maxVal < b) {
        maxVal = b;
        maxKey = a;
      }
    }
    let obj2 = new Map();
    for (let i = 0; i < genres.length; i++) {
      if (genres[i] === maxKey) {
        obj2.set(i, plays[i]);
      }
    }
    let isCnt = 0;
    while (obj2.size > 0) {
      let maxVal2 = 0;
      let maxKey2 = "";
      for (let [a, b] of obj2) {
        if (maxVal2 < b) {
          maxVal2 = b;
          maxKey2 = a;
        }
      }

      if (isCnt === 2) {
        break;
      } else {
        answer.push(maxKey2);
        isCnt += 1;
      }
      obj2.delete(maxKey2);
    }

    obj.delete(maxKey);
  }

  return answer;
}

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);

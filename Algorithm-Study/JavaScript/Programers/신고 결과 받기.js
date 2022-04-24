function solution(id_list, report, k) {
  let answer = Array.from({ length: id_list.length }, () => 0);
  let report_list = {};

  // 신고당한 id를 알아보기위해 report_list라는 객체를 생성한다.
  id_list.map((item) => {
    report_list[item] = [];
  });
  // 신고한 목록인 report를 풀어서 신고당한 report_list를 채워넣는다.
  // if로 중복을 막는다.
  report.map((item) => {
    let [a, b] = item.split(" ");
    if (!report_list[b].includes(a)) {
      report_list[b].push(a);
    }
  });
  // 신고당한 id중에 k이상인 애들은 정지처리
  // k이상인 애들을 풀어서 신고한사람의 answer index에 1씩 추가해준다.
  for (let key in report_list) {
    if (report_list[key].length >= k) {
      report_list[key].map((user) => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }

  return answer;
}
a;

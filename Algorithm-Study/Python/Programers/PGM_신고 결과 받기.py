def solution(id_list, report, k):
    answer = [0 for i in range(len(id_list)) ]
    report_list = {}
    for a in id_list:
        report_list[a]=[]
    
    for val in report:
        a,b = val.split(' ')
        if(a not in report_list[b]):
            report_list[b].append(a)
            
    for val in report_list:
        if(len(report_list[val]) >= k):
            for i in report_list[val]:
                answer[id_list.index(i)] += 1

    return answer
def solution(lottos, win_nums):
    answer = []
    print(lottos)
    print(win_nums)
    same_num = 0
    zero_cnt = 0
    for i in range(6):
        if (lottos[i] in win_nums):
            same_num += 1
        elif (lottos[i] == 0):
            zero_cnt += 1
    max_val = same_num+zero_cnt
    min_val = same_num
    
    if(abs(max_val -7) == 7):
        answer.append(6)
    else:
        answer.append(abs(max_val -7))
    
    if(abs(min_val -7) == 7):
        answer.append(6)
    else:
        answer.append(abs(min_val -7))

    
    
    return answer
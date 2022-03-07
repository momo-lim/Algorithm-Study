# 공백을 기준으로 나눠받고 출력할때 역순으로 출력한다.

T = int(input())
for tc in range(1,T+1):
    arr = input().split()
    arr.reverse()
    print('Case #{}: {}'.format(tc,' '.join(arr)))
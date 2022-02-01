'''
풀이
브루트포스
본인을 포함했다 치고 1부터 값을 가지고 시작한다.
for문 돌면서 본인보다 몸무게,키가 둘다 큰값이 나타나면 +1

'''

N = int(input())

men = [list(map(int, input().split())) for _ in range(N)]

result = []
for x, y in men:
    cnt = 1
    for z in range(N):
        if men[z][0] > x and men[z][1] > y:
                cnt += 1
    result.append(cnt)

print(*result)

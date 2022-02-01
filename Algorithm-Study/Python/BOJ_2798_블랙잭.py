'''
브루트포스
중복x
3장의 카드를 골라야 한다.
M과 제일 가까운 값
오름차순으로 3중 for문으로 탐색한다.
l-2 l-1을 한 이유는 뒤의 for문이 탐색할 공간을 비워두기 위해서다.
l-2 l-1을 해도 똑같은 값이 나오지만 의미없는 반복을 하기 때문
'''

N,M = map(int,input().split())

numberlist = list(map(int,input().split()))

max_v = 0
result = 0

l = len(numberlist)
for i in range(l-2):
    for j in range(i+1,l-1):
        for k in range(j+1,l):
          result = numberlist[i]+numberlist[j]+numberlist[k]
          if result <= M and result >= max_v:
              max_v = result

print(max_v)

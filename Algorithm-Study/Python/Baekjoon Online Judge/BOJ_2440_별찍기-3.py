'''
풀이
N개 만큼의 별을 역순으로 출력...
for 문 인자를 반대로 하면 된다.
'''

N = int(input())

for i in range(N,-1,-1):
    print('*'*i)
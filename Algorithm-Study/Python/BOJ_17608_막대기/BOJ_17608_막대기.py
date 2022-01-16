import sys

N = int(input())
arr = [int(sys.stdin.readline()) for _ in range(N)]

start = arr[-1]
count = 1
for i in range(N-1,-1,-1):
    if start < arr[i]:
        count += 1
        start = arr[i]

print(count)

#시간초과가 나니까 import sys 해서 입력값을 받아올때 시간을 단축해주자
#오른쪽부터 보이는 막대기의 갯수를 세는것이니까 오른쪽부터 순회를 돌아줄것이다.
#갯수를 세어줄 count 변수와 시작점을 나타내는 start 변수를 만든다.
#맨 처음은 항상 보이기 때문에 count는 1부터 시작할거고 start는 받아온 입력값의 맨 마지막 인덱스값으로 지정해 준다.
#이제 순회 돌면서 start 보다 큰값이 나오면 count를 1 누적합 하고 start를 교체해주면 끝
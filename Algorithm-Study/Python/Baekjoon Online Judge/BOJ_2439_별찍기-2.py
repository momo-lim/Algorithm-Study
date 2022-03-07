'''
별찍기-1 이랑 같은 방식으로 푼다.
출력할때 문자열 오른쪽 정렬 함수인 rjust를 사용한다
왼쪽은 ljust 이다.
rjust 함수 안에 인자는 자리수를 입력한다.
'''

N = int(input())
for i in range(1,N+1):
    print(('*'*i).rjust(N))
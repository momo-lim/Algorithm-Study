'''
DFS
첫째줄 N은 전체 사람의 수
둘째 줄에는 촌수를 계산해야하는 서로 다른 두 사람의 번호
셋째 줄에는 부모 자신들 간의 관계의 개수 M
넷째 줄 부터는 부모 자식간의 관계를 나타내는 번호 x,y가 나온다.
x는 y의 부모번호이다.

나와 아버지 는 한칸으로 1촌
나와 할아버지는 두칸을 건너야 하므로 2촌
DFS로 구해야 하는 두 사람의 번호가 만날때까지 몇번을 거치는지 계산해보자
인접리스트를 생성하고 재귀적 DFS로 인접한 노드로 방문체크를 누적합 하면서 이동

'''

def DFS(v):

    for i in family[v]:
        if visited[i] == 0:
            visited[i] = visited[v] + 1
            DFS(i)

N = int(input()) # 전체 사람의 수
a, b = map(int,input().split()) # 구해야 하는 촌수 두 사람의 수
M = int(input()) # 관계의 개수
family = [[] for _ in range(N+1)]
visited = [0]*(N+1)
key = 0

for i in range(M):
    x,y = map(int,input().split())
    family[x].append(y)
    family[y].append(x)

DFS(a)

if visited[b] != 0:
    print(visited[b])
else:
    print(-1)
# [[], [2, 3], [7, 8, 9], [], [5, 6], [], [], [], [], []]
# [[], [2, 3], [1, 7, 8, 9], [1], [5, 6], [4], [4], [2], [2], [2]]

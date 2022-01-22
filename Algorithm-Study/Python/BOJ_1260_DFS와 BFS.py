'''
BFS와 DFS 둘 다 사용
그래프를 탐색할때는 인접행렬을 사용한다.

DFS 코드의 for문 i는 노드의 번호이며 열을 탐색하고 행을 이동시킨다.
BFS는 문제의 조건인 방문할수 있는 정점이 여러개인 경우 정점번호가 작은것을 먼저 방문하라는 것 때문에
후입선출이 아닌 선입선출의 코드로 작성한다.
'''


def DFS(v):
    if len(result_DFS) == N:
        return
    result_DFS.append(v)
    visited[v] = 1
    for i in range(1,N+1):
        if arr[v][i] == 1 and not visited[i]:
            DFS(i)


def BFS(v):

    queue = []
    queue.append(v)
    visited[v] = 1
    while queue:
        current = queue.pop(0)
        result_BFS.append(current)
        for i in range(1,N+1):
            if arr[current][i] == 1 and not visited[i]:
                queue.append(i)
                visited[i] = 1


N, M, V = map(int,input().split()) # 정점의 개수 N, 간선의 개수 M, 탐색을 시작할 정점번호 V
arr = [[0]*(N+1) for _ in range(N+1)] # 헷갈리지 않고 1~N까지 숫자 맞추기위해 N+1


result_DFS = []
result_BFS = []


for i in range(M):
    a,b = map(int,input().split())
    arr[a][b] = 1
    arr[b][a] = 1


visited = [0] * (N+1)
DFS(V)
visited = [0] * (N+1)
BFS(V)
print(*result_DFS)
print(*result_BFS)
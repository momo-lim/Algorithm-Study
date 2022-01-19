'''
풀이
DFS
델타를 이용해 상하좌우를 탐색하자.
문제를 읽어보면 전체 땅에는 여러개의 섹터로 나뉘어져 있는 개념이다.
방문체크 할 배열을 만들어 두고 이중 반복문으로 탐색하며 #이 아닌곳이며 방문하지 않았던 곳을 찾는다.
위의 조건에 맞는다면 DFS 함수에 현재 위치를 넘겨서 실행해 준다.
실행한 위치가 양이나 늑대라면 그 수를 체크해주고 4가지 방향으로 돌면서 조건에 맞는지 계속해서 탐색한다.
4가지 방향으로 다 탐색했는데 break 되지 않았다면 근처를 모두 방문했거나 갈데가 없는것이니 pop해서 제거하고 되돌아간다.
그러고 현재 섹터의 모든 방향을 탐색했다면 마지막으로 양과 늑대의 개수를 문제의 조건대로 비교해주고 total 점수에 합산한다!!

'''

import sys
input = sys.stdin.readline

def DFS(r,c):
    global total_O
    global total_V
    stack = []
    stack.append((r,c))
    visited[r][c] = 1



    O = 0
    V = 0
    if ground[r][c] == 'v':
        V += 1
    elif ground[r][c] == 'o':
        O += 1
    while stack:
        cr,cc = stack[-1]

        for i in range(4):
            nr = cr+dr[i]
            nc = cc+dc[i]

            if 0 <= nr < R and 0 <= nc < C and ground[nr][nc] != '#' and not visited[nr][nc]:
                stack.append((nr,nc))
                visited[nr][nc] = 1
                if ground[nr][nc] == 'o':
                    O += 1
                elif ground[nr][nc] == 'v':
                    V += 1
                break
        else:
            stack.pop()

    if O > V:
        total_O = total_O + O
    elif O <= V:
        total_V = total_V + V



R,C = map(int,input().split())

ground = [input() for _ in range(R)]
visited = [[0]*C for _ in range(R)]

dr = [-1,1,0,0] # 상 하 좌 우
dc = [0,0,-1,1]

total_O = 0
total_V = 0

for i in range(R):
    for j in range(C):
        if ground[i][j] != '#' and visited[i][j] == 0:
            DFS(i,j)

print(total_O,end = ' ')
print(total_V)

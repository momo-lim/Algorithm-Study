'''
풀이
BFS
방향을 좌상1,2 우상1,2 우하1,2 좌하1,2 로 나눠서 이동시키고 너비우선탐색을 실행시키면 될것같다.
출발점과 도착점일때를 생각 못해서 무한루프에 걸렸었다. 현재 이동할 위치를 뽑았을때 도착위치라면 return해주는 것으로 해결하였다.
'''

from collections import deque

def BFS(r, c, dis):
    queue = deque()
    queue.append((r, c, dis))
    visited[r][c] = 1

    while queue:
        cr, cc, dis_c = queue.popleft()
        if cr == target_r and cc == target_c:
            return dis_c

        for i in range(8):
            nr = cr + dr[i]
            nc = cc + dc[i]

            if 0 <= nr < I and 0 <= nc < I and not visited[nr][nc]:
                queue.append((nr, nc, dis_c + 1))
                visited[nr][nc] = 1


dr = [-1, -2, -2, -1, 1, 2, 2, 1]
dc = [-2, -1, 1, 2, 2, 1, -1, -2]

T = int(input())
for tc in range(1, T + 1):
    I = int(input())  # 한 변의 길이
    r, c = map(int, input().split())  # 현재 나이트의 위치
    target_r, target_c = map(int, input().split())  # 도착해야하는 위치

    arr = [[0] * I for _ in range(I)]
    visited = [[0] * I for _ in range(I)]

    print(BFS(r, c, 0))

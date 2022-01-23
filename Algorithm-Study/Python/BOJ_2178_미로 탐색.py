'''
풀이
BFS
1은 이동할수 있는칸, 0은 이동할수 없는칸
1,1(0,0)에서 시작해서 N,M으로 이동할때 최소 이동거리를 구하는 문제
너비우선탐색으로 이동거리를 같이 계산하며 이동하고,
도착하면 해당 거리를 가지고 break 하기
너비우선탐색은 큐를 이용하고 큐는 선입선출 구조이다.
가장 먼저 들어온것을 가장 먼저 빼서 탐색하는 방법이므로 최소 거리를 구하는데 적합하다.
'''

def BFS(r,c,dis):
    queue = []
    queue.append((r,c,dis))
    dr = [-1,1,0,0] # 상 하 좌 우
    dc = [0,0,-1,1]
    visited[r][c] = 1

    while queue:
        cr,cc,dis = queue.pop(0)
        if cr == N-1 and cc == M-1:

            return dis

        for i in range(4):
            nr = cr+dr[i]
            nc = cc+dc[i]

            if 0 <= nr < N and 0 <= nc < M and not visited[nr][nc] and maze[nr][nc] == 1:
                queue.append((nr,nc,dis+1))
                visited[nr][nc] = 1





N, M = map(int,input().split())
maze = [list(map(int,input())) for _ in range(N)]
visited = [[0]*M for _ in range(N)]
print(BFS(0,0,1))
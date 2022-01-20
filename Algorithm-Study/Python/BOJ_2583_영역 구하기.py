'''
풀이
BFS
K개 만큼의 직사각형을 지도에 먼저 그려주고
순회를 돌면서 빈칸만 찾으면 구역을 나누기 어려우니
너비우선탐색 으로 돌면서 그려지지 않은 부분의 칸을 체크해준다.
'''

def BFS(i,j):
    global zone
    queue = []
    queue.append((i,j))
    count = 0
    zone += 1
    maps[i][j] = 2
    count += 1

    while queue:
        cr,cc = queue.pop()

        for i in range(4):
            nr = cr+dr[i]
            nc = cc+dc[i]

            if 0 <= nr < M and 0 <= nc < N and not maps[nr][nc]:
                queue.append((nr,nc))
                maps[nr][nc] = 2
                count += 1
    count_list.append(count)

dr = [-1,1,0,0] # 상 하 좌 우
dc = [0,0,-1,1]
count_list = [] # 각 구역마다 몇개씩 있는지
zone = 0 # 몇개의 구역인지
M,N,K = map(int,input().split())
maps = [[0]*N for _ in range(M)]
for _ in range(K):
    x1,y1,x2,y2 = map(int,input().split())

    # 지도에 그리기
    for i in range(y1,y2):
        for j in range(x1,x2):
            maps[i][j] = 1

# 빈 구역 찾아서 탐색하기
for i in range(M):
    for j in range(N):
        if maps[i][j] == 0:
            BFS(i,j)

count_list.sort()
print(zone)
print(*count_list)

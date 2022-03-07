'''
풀이
DFS
음.. 모든 요소에서 DFS를 시작한다. 4 방향으로 6칸까지만!
6칸까지 다 저장해놓고 리스트 배열에 push

몇칸까지 이동했는지 저장하는 인자도 같이 전달하고 그 수를 이용해 6번 저장했는지 체크
6번 저장했다면 최종 result 배열에 존재하는지 검사하고 중복되지 않는다면 push 후 return
존재한다면 그냥 return해서 모든 경우의 수를 찾아준다.

무한루프가 발생해서 계속 에러가 떴었는데 중복검사가 통과되고나면 return으로 적었기 때문에
중복된게 없다면 count가 6으로 넘어가버리는 상황이 발생하여 return이 소용없게 되어버렸기 때문이다.
중복검사와 상관없이 return 하게 되는걸로 바꾸어서 에러를 해결하였다.
'''

def DFS(r,c,str,count):
    if count == 5:
        if str not in result:
            result.append(str)
        return


    for i in range(4):
        nr = r+dr[i]
        nc = c+dc[i]

        if 0 <= nr <= 4 and 0 <= nc <= 4:
            DFS(nr, nc, str + arr[nr][nc], count+1)

dr = [-1,1,0,0]
dc = [0,0,-1,1]
result = []
arr = [input().split() for _ in range(5)]

for i in range(5):
    for j in range(5):
        DFS(i,j,arr[i][j],0)


print(len(result))
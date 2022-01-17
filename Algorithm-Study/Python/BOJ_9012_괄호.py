# 접근방법
# 스택
# 여는 괄호와 닫는괄호가 쌍으로 갯수가 맞는지 아닌지 검사하기만 하면 된다.

T = int(input())
for tc in range(1,T+1):
    arr = list(input())


    stack = []
    result = "NO"
    for i in range(len(arr)):
        if stack == [] and arr[i] == ")":
            break
        elif arr[i] == "(":
            stack.append(arr[i])
        else:
            stack.pop(-1)
    else:
        if stack == []:
            result = "YES"

    print(result)

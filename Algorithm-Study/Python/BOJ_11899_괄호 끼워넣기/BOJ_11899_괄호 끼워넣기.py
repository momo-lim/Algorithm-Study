# 접근방법
# 스택
# 괄호를 stack에 쌓는다.
# stack이 비어있는데 닫는 괄호가 오면 count +1
# 여는 괄호면 stack에 쌓아준다.
# 닫는 괄호가 오면 여는 괄호 하나 삭제
# 끝나고 나면 stack에 남아있는 괄호 갯수만큼 count 해준다.
# count의 총 합이 답이 될 것

stack = []
count = 0
arr = list(input())
for i in range(len(arr)):
    if stack == [] and arr[i] == ")":
        count += 1
    elif stack and arr[i] == "(":
        stack.append(arr[i])
    elif stack and arr[i] == ")":
        stack.pop(0)
    else:
        stack.append(arr[i])


if stack:

    count += len(stack)
print(count)





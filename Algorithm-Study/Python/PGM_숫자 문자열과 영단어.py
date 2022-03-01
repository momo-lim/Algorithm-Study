def solution(s):
    word = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    wordType = ''
    answer = ''
    for i in range(len(s)):
        if not s[i].isdigit():
            wordType += s[i]
            if wordType in word:
                answer += str(word.index(wordType))
                wordType = ''
        else:
            answer += s[i]

    return int(answer)


print(solution)

def minimum_length(s):
    left = 0
    right = len(s) - 1

    while left < right and s[left] == s[right]:
        ch = s[left]  # Because left and right both have the same character
        while left <= right and s[left] == ch:  # move toward right until a different character is encountered or you cross the right pointer
            left += 1
        while left <= right and s[right] == ch:  # move toward left until a different character is encountered or you cross the left pointer
            right -= 1

    return right - left + 1
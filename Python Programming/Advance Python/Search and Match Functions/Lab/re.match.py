import re

text = "Python Class"

word = input("Enter first word: ")
result = re.match(word, text)

if result:
    print("Match found at beginning")
else:
    print("No match at beginning")

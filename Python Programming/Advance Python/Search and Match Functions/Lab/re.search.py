import re

text = "I am learning regex in python"

word = input("Enter word to search: ")
result = re.search(word, text)

if result:
    print("Word found in string")
else:
    print("Word not found")

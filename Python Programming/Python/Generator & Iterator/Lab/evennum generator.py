def even_no():
    n = 2
    count = 0

    while count < 10:
        yield n
        n = n + 2
        count = count + 1

for i in even_no():
    print(i)
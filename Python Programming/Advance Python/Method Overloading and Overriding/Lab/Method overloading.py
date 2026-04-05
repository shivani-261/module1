class Calculator:
    def total(self, a=0, b=0, c=0):
        print("Total:", a + b + c)

obj = Calculator()
obj.total(4, 6)
obj.total(1, 2, 3)

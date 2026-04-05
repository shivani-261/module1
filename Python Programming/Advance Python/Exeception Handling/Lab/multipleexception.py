try:
    num1 = int(input("Enter first number: "))
    num2 = int(input("Enter second number: "))
    print("Division is:", num1 / num2)
except ValueError:
    print("Please enter only numbers")
except ZeroDivisionError:
    print("Second number should not be zero")

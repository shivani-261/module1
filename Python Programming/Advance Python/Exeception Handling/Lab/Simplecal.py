try:
    a = int(input("Enter first number: "))
    b = int(input("Enter second number: "))
    choice = input("Enter operation (+, -, *, /): ")

    if choice == "+":
        print("Answer:", a + b)
    elif choice == "-":
        print("Answer:", a - b)
    elif choice == "*":
        print("Answer:", a * b)
    elif choice == "/":
        print("Answer:", a / b)
    else:
        print("Invalid operation")
except ValueError:
    print("Please enter valid numbers")
except ZeroDivisionError:
    print("You cannot divide by zero")

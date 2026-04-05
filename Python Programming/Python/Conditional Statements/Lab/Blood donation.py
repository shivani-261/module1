age = int(input("Enter age: "))
weight = int(input("Enter weight: "))

if age >= 18:
    if weight >= 50:
        print("Eligible to donate blood")
    else:
        print("Weight is less than required")
else:
    print("Age is less than required")

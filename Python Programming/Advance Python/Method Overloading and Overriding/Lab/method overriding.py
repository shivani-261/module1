class Bird:
    def move(self):
        print("Bird can move")

class Sparrow(Bird):
    def move(self):
        print("Sparrow flies in the sky")

b = Sparrow()
b.move()

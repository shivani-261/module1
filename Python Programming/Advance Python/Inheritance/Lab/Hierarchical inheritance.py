class A:
    def a(self):
        print("This is class A")
class B(A):
    def b(self):
        print("This is class B")
class C(A):
    def c(self):
        print("This is class C")
b1=B()
c1=C()
b1.a()
b1.b()

c1.a()
c1.c()

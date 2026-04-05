class A:
    def a(self):
        print("This is class A")
class B(A):
    def b(self):
        print("This is class B")
class C(A):
    def c(self):
        print("This is class C")
class D(B,C):
    def d(self):
        print("This is class D")
d1=D()
d1.a()
d1.b()
d1.c()
d1.d()

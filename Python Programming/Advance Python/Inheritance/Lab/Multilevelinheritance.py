class A:
    def a(self):
        print("This is class A")
class B(A):
    def b(self):
        print("This is class B")
class C(B):
    def c(self):
        print("This is class C")
c1=C()
c1.a()
c1.b()
c1.c()

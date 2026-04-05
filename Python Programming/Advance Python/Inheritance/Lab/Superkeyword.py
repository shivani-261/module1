class A:
    def show(self):
        print("Show from class A.")
class B(A):
    def show(self):
        super().show()
        print("Show from class B.")
class C(A):
    def show(self):
        super().show()
        print("Show from class C.")
class D(C,B):
    def show(self):
        super().show()
        print("Show from class D.")
d1=D()
d1.show()


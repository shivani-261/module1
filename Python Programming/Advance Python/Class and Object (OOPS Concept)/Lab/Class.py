class Book:
    def set_data(self):
        self.title = "Python Notes"
        self.pages = 120

    def show_data(self):
        print("Title:", self.title)
        print("Pages:", self.pages)

b1 = Book()
b1.set_data()
b1.show_data()

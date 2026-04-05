from tkinter import *
import mysql.connector
import tkinter.messagebox as msg

def create_cone():
    return mysql.connector.connect(
        database="python_db",
        user="root",
        password="",
        host="localhost"
    )

def add_book():
    if e_id.get() == "" or e_title.get() == "" or e_author.get() == "" or e_price.get() == "":
        msg.showinfo("Save Status", "All fields are required")
    else:
        con = create_cone()
        cur = con.cursor()
        query = "insert into books(id,title,author,price) values(%s,%s,%s,%s)"
        args = (e_id.get(), e_title.get(), e_author.get(), e_price.get())
        cur.execute(query, args)
        con.commit()
        con.close()

        e_id.delete(0, 'end')
        e_title.delete(0, 'end')
        e_author.delete(0, 'end')
        e_price.delete(0, 'end')

        msg.showinfo("Save Status", "Book added successfully")

def search_book():
    e_title.delete(0, 'end')
    e_author.delete(0, 'end')
    e_price.delete(0, 'end')

    if e_id.get() == "":
        msg.showinfo("Search Status", "Please enter book id")
    else:
        con = create_cone()
        cur = con.cursor()
        query = "select * from books where id=%s"
        args = (e_id.get(),)
        cur.execute(query, args)
        row = cur.fetchall()

        if row:
            e_title.insert(0, row[0][1])
            e_author.insert(0, row[0][2])
            e_price.insert(0, row[0][3])
        else:
            msg.showinfo("Search Status", "Book not found")

        con.close()

def update_book():
    con = create_cone()
    cur = con.cursor()
    query = "update books set title=%s,author=%s,price=%s where id=%s"
    args = (e_title.get(), e_author.get(), e_price.get(), e_id.get())
    cur.execute(query, args)
    con.commit()
    con.close()

    msg.showinfo("Update Status", "Book updated successfully")

def delete_book():
    con = create_cone()
    cur = con.cursor()
    query = "delete from books where id=%s"
    args = (e_id.get(),)
    cur.execute(query, args)
    con.commit()
    con.close()

    msg.showinfo("Delete Status", "Book deleted successfully")

root = Tk()
root.geometry("500x450")
root.title("Library Book Form")

Label(root, text="Book ID").place(x=50, y=50)
Label(root, text="Title").place(x=50, y=100)
Label(root, text="Author").place(x=50, y=150)
Label(root, text="Price").place(x=50, y=200)

e_id = Entry(root)
e_id.place(x=180, y=50)

e_title = Entry(root)
e_title.place(x=180, y=100)

e_author = Entry(root)
e_author.place(x=180, y=150)

e_price = Entry(root)
e_price.place(x=180, y=200)

Button(root, text="ADD", command=add_book).place(x=50, y=270)
Button(root, text="SEARCH", command=search_book).place(x=120, y=270)
Button(root, text="UPDATE", command=update_book).place(x=205, y=270)
Button(root, text="DELETE", command=delete_book).place(x=290, y=270)

root.mainloop()

#include <iostream>
using namespace std;

class Person {
public:
    string name;
    int age;
};

class Student : public Person {
public:
    void display() {
        cout << "Student Name: " << name << endl;
        cout << "Age: " << age << endl;
    }
};

class Teacher : public Person {
public:
    void display() {
        cout << "Teacher Name: " << name << endl;
        cout << "Age: " << age << endl;
    }
};

int main() {
    Student s;
    s.name = "Shivani";
    s.age = 20;
    s.display();

    Teacher t;
    t.name = "Mr. Patel";
    t.age = 40;
    t.display();

    return 0;
}

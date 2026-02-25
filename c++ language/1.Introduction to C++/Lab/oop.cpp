#include <iostream>
using namespace std;

class Rectangle {
    float length, width;

public:
    void input() {
        cout << "Enter length: ";
        cin >> length;
        cout << "Enter width: ";
        cin >> width;
    }

    void calculateArea() {
        cout << "Area of Rectangle = " << length * width << endl;
    }
};

int main() {
    Rectangle r;
    r.input();
    r.calculateArea();
    return 0;
}

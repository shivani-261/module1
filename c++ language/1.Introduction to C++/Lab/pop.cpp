#include <iostream>
using namespace std;

int main() {
    float length, width, area;

    cout << "Enter length: ";
    cin >> length;
    cout << "Enter width: ";
    cin >> width;

    area = length * width;

    cout << "Area of Rectangle = " << area << endl;

    return 0;
}

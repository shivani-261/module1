#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 5;

    cout << "Arithmetic: " << a + b << endl;
    cout << "Relational: " << (a > b) << endl;
    cout << "Logical: " << (a > 5 && b < 10) << endl;
    cout << "Bitwise: " << (a & b) << endl;

    return 0;
}

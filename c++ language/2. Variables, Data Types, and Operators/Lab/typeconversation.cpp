#include <iostream>
using namespace std;

int main() {
    int a = 10;
    double b = 3.5;

    // Implicit conversion
    double result1 = a + b;

    // Explicit conversion
    int result2 = (int)b;

    cout << "Implicit Conversion Result: " << result1 << endl;
    cout << "Explicit Conversion Result: " << result2 << endl;

    return 0;
}

#include <iostream>
using namespace std;

class Calculator {
public:
    float add(float a, float b) { return a + b; }
    float sub(float a, float b) { return a - b; }
    float mul(float a, float b) { return a * b; }
    float divi(float a, float b) { return a / b; }
};

int main() {
    Calculator c;
    cout << "Addition: " << c.add(10, 5) << endl;
    cout << "Subtraction: " << c.sub(10, 5) << endl;
    cout << "Multiplication: " << c.mul(10, 5) << endl;
    cout << "Division: " << c.divi(10, 5) << endl;

    return 0;
}

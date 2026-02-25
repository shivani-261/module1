#include <iostream>
using namespace std;

float add(float a, float b) { return a + b; }
float sub(float a, float b) { return a - b; }
float mul(float a, float b) { return a * b; }
float divi(float a, float b) { return a / b; }

int main() {
    float a, b;
    cout << "Enter two numbers: ";
    cin >> a >> b;

    cout << "Addition: " << add(a, b) << endl;
    cout << "Subtraction: " << sub(a, b) << endl;
    cout << "Multiplication: " << mul(a, b) << endl;
    cout << "Division: " << divi(a, b) << endl;

    return 0;
}

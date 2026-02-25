#include <iostream>
using namespace std;

int globalVar = 100;

void display() {
    int localVar = 50;
    cout << "Local Variable: " << localVar << endl;
    cout << "Global Variable: " << globalVar << endl;
}

int main() {
    display();
    return 0;
}

#include <iostream>
using namespace std;

int main() {
    int secret = 50, guess;

    while (true) {
        cout << "Guess the number (1-100): ";
        cin >> guess;

        if (guess > secret)
            cout << "Too High!\n";
        else if (guess < secret)
            cout << "Too Low!\n";
        else {
            cout << "Correct Guess!\n";
            break;
        }
    }

    return 0;
}

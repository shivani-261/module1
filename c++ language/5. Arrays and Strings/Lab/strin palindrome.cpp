#include <iostream>
#include <string>
using namespace std;

int main() {
    string str;
    bool isPalindrome = true;

    cout << "Enter string: ";
    cin >> str;

    int len = str.length();

    for (int i = 0; i < len / 2; i++) {
        if (str[i] != str[len - i - 1]) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome)
        cout << "Palindrome";
    else
        cout << "Not Palindrome";

    return 0;
}

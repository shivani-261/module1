#include <iostream>
using namespace std;

class BankAccount {
private:
    float balance;

public:
    void setBalance(float b) {
        balance = b;
    }

    void deposit(float amount) {
        balance += amount;
    }

    void withdraw(float amount) {
        if (amount <= balance)
            balance -= amount;
        else
            cout << "Insufficient Balance\n";
    }

    void showBalance() {
        cout << "Balance: " << balance << endl;
    }
};

int main() {
    BankAccount acc;
    acc.setBalance(1000);
    acc.deposit(500);
    acc.withdraw(300);
    acc.showBalance();

    return 0;
}

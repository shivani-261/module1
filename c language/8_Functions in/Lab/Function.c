#include <stdio.h>

int factorial(int n);   // Function declaration

int main() {
    int num;
    printf("Enter number: ");
    scanf("%d", &num);

    printf("Factorial = %d", factorial(num));  // Function call
    return 0;
}

int factorial(int n) {   // Function definition
    int i, fact=1;
    for(i=1; i<=n; i++)
        fact *= i;
    return fact;
}

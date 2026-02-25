#include <stdio.h>

int main() {
    int a, b;

    printf("Enter two integers: ");
    scanf("%d %d", &a, &b);

    // Arithmetic
    printf("Addition: %d\n", a + b);
    printf("Subtraction: %d\n", a - b);
    printf("Multiplication: %d\n", a * b);
    printf("Division: %d\n", a / b);

    // Relational
    printf("a > b: %d\n", a > b);
    printf("a == b: %d\n", a == b);

    // Logical
    printf("(a>b && b>0): %d\n", (a>b && b>0));

    return 0;
}

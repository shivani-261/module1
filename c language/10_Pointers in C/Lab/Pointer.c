#include <stdio.h>

int main() {
    int num = 10;
    int *ptr = &num;

    *ptr = 20;   // Modify using pointer

    printf("Value of num = %d", num);

    return 0;
}

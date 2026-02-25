#include <stdio.h>

int main() {
    int i;

    // For loop
    for(i=1; i<=10; i++)
        printf("%d ", i);

    printf("\n");

    // While loop
    i=1;
    while(i<=10) {
        printf("%d ", i);
        i++;
    }

    printf("\n");

    // Do-while loop
    i=1;
    do {
        printf("%d ", i);
        i++;
    } while(i<=10);

    return 0;
}

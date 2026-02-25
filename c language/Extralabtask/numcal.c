#include <stdio.h>

int main() {
    int a, b, c;
    int largest, smallest;
    int choice;

    printf("Enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);

    // Finding Largest using switch
    choice = (a >= b && a >= c) ? 1 :
             (b >= a && b >= c) ? 2 : 3;

    switch(choice) {
        case 1:
            largest = a;
            break;
        case 2:
            largest = b;
            break;
        case 3:
            largest = c;
            break;
    }

    // Finding Smallest using switch
    choice = (a <= b && a <= c) ? 1 :
             (b <= a && b <= c) ? 2 : 3;

    switch(choice) {
        case 1:
            smallest = a;
            break;
        case 2:
            smallest = b;
            break;
        case 3:
            smallest = c;
            break;
    }

    printf("Largest number = %d\n", largest);
    printf("Smallest number = %d\n", smallest);

    return 0;
}

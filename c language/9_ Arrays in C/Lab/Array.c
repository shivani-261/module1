#include <stdio.h>

int main() {
    int arr[5], i;
    int matrix[3][3], sum=0;

    printf("Enter 5 numbers:\n");
    for(i=0; i<5; i++)
        scanf("%d", &arr[i]);

    printf("Array elements:\n");
    for(i=0; i<5; i++)
        printf("%d ", arr[i]);

    printf("\nEnter 3x3 matrix elements:\n");
    for(i=0; i<3; i++)
        for(int j=0; j<3; j++) {
            scanf("%d", &matrix[i][j]);
            sum += matrix[i][j];
        }

    printf("Sum of matrix = %d", sum);

    return 0;
}

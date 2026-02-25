#include <stdio.h>

int main() {
    FILE *fp;
    char text[100];

    fp = fopen("data.txt", "w");
    fprintf(fp, "Hello File Handling!");
    fclose(fp);

    fp = fopen("data.txt", "r");
    fgets(text, sizeof(text), fp);
    printf("File Content: %s", text);
    fclose(fp);

    return 0;
}

#include <iostream>
#include <algorithm> // For std::reverse
using namespace std;

// Function to check if the array is symmetric
bool isSymmetric(int arr[], int n) {
    for (int i = 0; i < n / 2; i++) {
        if (arr[i] != arr[n - i - 1])
            return false; // If elements don't match, it's not symmetric
    }
    return true; // If loop completes, array is symmetric
}

int main() {
    // 1. Initialize a One-Dimensional Array and Print
    int array[5] = {1, 2, 3, 4, 5};
    cout << "Array: ";
    for (int i = 0; i < 5; i++) {
        cout << array[i] << " ";
    }
    cout << "\n";

    // 2. Find the Maximum Element
    int max = array[0];
    for (int i = 1; i < 5; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    cout << "Maximum Element = " << max << "\n";

    // 3. Calculate the Average
    double arrayDouble[4] = {2.5, 3.5, 4.5, 5.5};
    double sum = 0;
    for (int i = 0; i < 4; i++) {
        sum += arrayDouble[i];
    }
    cout << "Average = " << sum / 4 << "\n";

    // 4. Reverse an Array
    std::reverse(array, array + 5); // Using std::reverse for simplicity
    cout << "Reversed array: ";
    for (int i = 0; i < 5; i++) {
        cout << array[i] << " ";
    }
    cout << "\n";

    // 5. Check Symmetry
    int symArray[] = {1, 3, 5, 3, 1};
    cout << (isSymmetric(symArray, sizeof(symArray) / sizeof(symArray[0])) ? "The array is symmetric." : "The array is not symmetric.") << "\n";

    // 6. Matrix Addition
    int matrix1[2][2] = {{1, 2}, {3, 4}};
    int matrix2[2][2] = {{5, 6}, {7, 8}};
    int sumMatrix[2][2];
    cout << "Matrix Addition Result:\n";
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            sumMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
            cout << sumMatrix[i][j] << " ";
        }
        cout << "\n";
    }

    return 0;
}

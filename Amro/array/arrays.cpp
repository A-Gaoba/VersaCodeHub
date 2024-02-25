// 1. Initialize a One-Dimensional Array

#include <iostream>
using namespace std;

int main() {
  int array[5] = {1, 2, 3, 4, 5}; // Initializing the array with values
  for (int i = 0; i < 5; i++) {
    cout << array[i] << " "; // Printing each element of the array
  }
  return 0;
}

// 2. Find the Maximum Element

#include <iostream>
using namespace std;

int main() {
  int array[5] = {1, 5, 3, 9, 2};
  int max = array[0]; // Assume first element is the max initially
  for (int i = 1; i < 5; i++) {
    if (array[i] > max) {
      max = array[i]; // Update max if current element is larger
    }
  }
  cout << "Maximum Element = " << max;
  return 0;
}



// 3. Calculate the Average

#include <iostream>
using namespace std;

int main() {
  double array[4] = {2.5, 3.5, 4.5, 5.5};
  double sum = 0;
  for (int i = 0; i < 4; i++) {
    sum += array[i];    // Add each element to sum
    cout << sum << " "; // the sum of the array wil be 16
  }
  double average = sum / 4; // Divide sum by the number of elements
  cout << "Average = " << average;
  return 0;
}


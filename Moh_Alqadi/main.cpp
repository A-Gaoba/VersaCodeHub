#include <cmath>
#include <iostream>
using namespace std;

int main() {
  // task 1
  cout << "----------task 1----------" << endl;
  float x;
  cout << "Enter the value of x: ";
  cin >> x;

  double result1 = sin(pow(x, 2)) - tan(pow(x, 1.0 / 3.0));
  cout << "Result 1: " << result1 << endl;

  cout << "--------------------------" << endl;
  cout << "----------task 2----------" << endl;

  // task 2
  double a = 1000;
  double b = 0.0001;

  double result2 = (pow((a - b), 3) - pow(a, 3)) / (3 * a * pow(b, 2) - pow(b, 3) - 3 * pow(a, 2) * b);
  cout << "Result 2: " << result2 << endl;

  return 0;
}

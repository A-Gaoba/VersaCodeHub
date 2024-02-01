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
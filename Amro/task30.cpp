#include <iostream>
using namespace std;

int main() {
  double X, Y, W;

  cout << "Enter the value of X: ";
  cin >> X;
  cout << "Enter the value of Y: ";
  cin >> Y;

  if (X > 0 && Y < 0) {
    W = X + Y;
  } else if (X == 0 && Y > 0) {
    W = (X * X) * (Y * Y * Y) + (5 * X);
  } else if (X < 0 && Y == 0) {
    if (Y == 0) {
      cout << "Division by zero is not allowed!" << endl;
      return 1;
    }
    W = ((2 * X) / (3 * Y)) + 4 * X;
  } else {
    cout << "Invalid input!" << endl;
    return 1;
  }

  cout << "The value of W is: " << W << endl;

  return 0;
}

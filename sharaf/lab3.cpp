#include <cstdlib>
#include <ctime>
#include <iostream>
#include <unistd.h>

using namespace std;

const int MAX_SIZE = 15;
const int MIN_VALUE = 1;
const int MAX_VALUE = 100;

// ANSI escape codes for text color
#define RED_TEXT "\033[1;31m"
#define GREEN_TEXT "\033[1;32m"
#define YELLOW_TEXT "\033[1;33m"
#define BLUE_TEXT "\033[1;34m"
#define RESET_TEXT "\033[0m"

void printArray(int arr[], int size)
{
  for (int i = 0; i < size; i++)
  {
    cout << BLUE_TEXT << arr[i] << RESET_TEXT << " ";
  }
  cout << endl;
}

void generateRandomArray(int arr[], int size, int minValue, int maxValue)
{
  srand(time(0));
  for (int i = 0; i < size; i++)
  {
    arr[i] = rand() % (maxValue - minValue + 1) + minValue;
  }
}

void delay(int milliseconds)
{
  usleep(milliseconds * 1000); // usleep takes microseconds
}

void visualizeArray(int arr[], int size, int highlight1 = -1,
                    int highlight2 = -1)
{
  for (int i = 0; i < size; i++)
  {
    if (i == highlight1 || i == highlight2)
    {
      cout << RED_TEXT << "* " << arr[i] << " * " << RESET_TEXT;
    }
    else
    {
      cout << GREEN_TEXT << "* " << arr[i] << " " << RESET_TEXT;
    }
  }
  cout << endl;
}

void bubbleSort(int arr[], int size)
{
  for (int i = 0; i < size - 1; i++)
  {
    for (int j = 0; j < size - i - 1; j++)
    {
      visualizeArray(arr, size, j, j + 1);
      delay(1000); // Adjusted delay for better visibility

      if (arr[j] > arr[j + 1])
      {
        swap(arr[j], arr[j + 1]);
        visualizeArray(arr, size, j, j + 1);
        delay(1000); // Adjusted delay for better visibility
      }
    }
  }
}

void selectionSort(int arr[], int size)
{
  for (int i = 0; i < size - 1; i++)
  {
    int minIndex = i;
    for (int j = i + 1; j < size; j++)
    {
      visualizeArray(arr, size, minIndex, j);
      delay(1000); // Adjusted delay for better visibility

      if (arr[j] < arr[minIndex])
      {
        minIndex = j;
      }
    }
    swap(arr[i], arr[minIndex]);
    visualizeArray(arr, size, i, minIndex);
    delay(1000); // Adjusted delay for better visibility
  }
}

void insertionSort(int arr[], int size)
{
  for (int i = 1; i < size; i++)
  {
    int key = arr[i];
    int j = i - 1;
    while (j >= 0 && arr[j] > key)
    {
      visualizeArray(arr, size, j, i);
      delay(1000); // Adjusted delay for better visibility

      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
    visualizeArray(arr, size, j + 1, i);
    delay(1000); // Adjusted delay for better visibility
  }
}

int main()
{
  int arr[MAX_SIZE];
  int size;

  cout << "Enter the size of the array (between 10 and 15): ";
  cin >> size;

  if (size < 10 || size > 15)
  {
    cout << "Invalid size. Exiting program." << endl;
    return 1;
  }

  cout << "Generating random array..." << endl;
  generateRandomArray(arr, size, MIN_VALUE, MAX_VALUE);

  cout << "Original array: ";
  printArray(arr, size);

  cout << "Choose a sorting algorithm:\n"
       << "1. Bubble Sort\n"
       << "2. Selection Sort\n"
       << "3. Insertion Sort\n";
  int choice;
  cin >> choice;

  cout << "Press Enter to start the sorting visualization.";
  cin.ignore(); // Wait for user input

  for (int i = 0; i < 30; ++i)
  {
    cout << "\n\n"; // Separate initial state from the sorting visualization
  }

  switch (choice)
  {
  case 1:
    bubbleSort(arr, size);
    break;
  case 2:
    selectionSort(arr, size);
    break;
  case 3:
    insertionSort(arr, size);
    break;
  default:
    cout << "Invalid choice. Exiting program." << endl;
    return 1;
  }

  cout << "\n\nSorted array: ";
  printArray(arr, size);

  return 0;
}
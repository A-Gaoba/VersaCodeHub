// This problem was asked by Facebook.
// Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.

class RandomPicker<T> {
  private selectedElement: T | null = null;
  private count: number = 0;

  pickRandomElement(newElement: T): void {
    this.count++;

    // For the first element, just select it
    if (this.count === 1) {
      this.selectedElement = newElement;
      return;
    }

    // For subsequent elements, select with decreasing probability
    const probability = 1 / this.count;
    const randomValue = Math.random();

    if (randomValue < probability) {
      this.selectedElement = newElement;
    }
  }

  getRandomElement(): T | null {
    return this.selectedElement;
  }
}

// Example usage:
const stream = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const picker = new RandomPicker<number>();

for (const element of stream) {
  picker.pickRandomElement(element);
}

const randomElement = picker.getRandomElement();
console.log(`Randomly selected element: ${randomElement}`);

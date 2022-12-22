class ArrayofAnything<T> {
  collection: T[];
  constructor(collection: T[]) {
    this.collection = collection;
  }
  get(index: number): T {
    return this.collection[index];
  }
}
const collection = new ArrayofAnything<number>([1, 2, 33, 4]);
collection.get(3);
// generics constraints

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

/*
Generic function requirements
- take an arr of either cars or houses
- loop through the array
- call the print method on each elements
*/
// create an interface to specify a contraint on dynamic type T
interface Printable {
  print(): void;
}
// extends printable: whatv type T, it will implements interface printable
function printAny<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}
// no error because instance of car has a print method so it
// satisfies the interface printable
printAny<Car>([new Car(), new Car()]);

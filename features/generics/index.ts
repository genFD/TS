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

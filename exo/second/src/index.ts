import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
const collection = new NumbersCollection([256, 128, 64, 32, 16, 8]);
const toSort = new Sorter(collection);
toSort.sort();
console.log(collection.data);

// Ts config file helps us modidfy the behavior of ts compiler

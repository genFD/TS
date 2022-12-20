import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { StringCollection } from './StringCollections';
const collectionNumber = new NumbersCollection([500, 400, 300, 100]);
const collectionString = new StringCollection('edcba');
const toSortNumber = new Sorter(collectionNumber);
const toSortString = new Sorter(collectionString);
toSortString.sort();
toSortNumber.sort();
console.log(collectionNumber.data);
console.log(collectionString.data);

// Ts config file helps us modidfy the behavior of ts compiler

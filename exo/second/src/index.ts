import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { StringCollection } from './StringCollections';
import { LinkedList } from './LinkedList';
const collectionNumber = new NumbersCollection([500, 400, 300, 100]);
const collectionString = new StringCollection('edcba');
const collectionLinkedList = new LinkedList();
collectionLinkedList.add(500);
collectionLinkedList.add(300);
collectionLinkedList.add(400);
collectionLinkedList.add(100);

const toSortNumber = new Sorter(collectionNumber);
const toSortString = new Sorter(collectionString);
const toSortLL = new Sorter(collectionLinkedList);
toSortString.sort();
toSortNumber.sort();
toSortLL.sort();
console.log(collectionNumber.data);
console.log(collectionString.data);
collectionLinkedList.print();

// Ts config file helps us modidfy the behavior of ts compiler

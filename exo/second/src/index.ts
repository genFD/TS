import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { StringCollection } from './StringCollections';
import { LinkedList } from './LinkedList';
const collectionNumber = new NumbersCollection([500, 400, 300, 100]);
collectionNumber.sort();
const collectionString = new StringCollection('edcba');
collectionString.sort();
const collectionLinkedList = new LinkedList();

collectionLinkedList.add(500);
collectionLinkedList.add(300);
collectionLinkedList.add(400);
collectionLinkedList.add(100);
collectionLinkedList.sort();
collectionLinkedList.print();
console.log(collectionNumber.data);
console.log(collectionString.data);

// Ts config file helps us modidfy the behavior of ts compiler

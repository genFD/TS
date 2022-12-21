"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const StringCollections_1 = require("./StringCollections");
const LinkedList_1 = require("./LinkedList");
const collectionNumber = new NumbersCollection_1.NumbersCollection([500, 400, 300, 100]);
collectionNumber.sort();
const collectionString = new StringCollections_1.StringCollection('edcba');
collectionString.sort();
const collectionLinkedList = new LinkedList_1.LinkedList();
collectionLinkedList.add(500);
collectionLinkedList.add(300);
collectionLinkedList.add(400);
collectionLinkedList.add(100);
collectionLinkedList.sort();
collectionLinkedList.print();
console.log(collectionNumber.data);
console.log(collectionString.data);
// Ts config file helps us modidfy the behavior of ts compiler

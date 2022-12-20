"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const StringCollections_1 = require("./StringCollections");
const collectionNumber = new NumbersCollection_1.NumbersCollection([500, 400, 300, 100]);
const collectionString = new StringCollections_1.StringCollection('edcba');
const toSortNumber = new Sorter_1.Sorter(collectionNumber);
const toSortString = new Sorter_1.Sorter(collectionString);
toSortString.sort();
toSortNumber.sort();
console.log(collectionNumber.data);
console.log(collectionString.data);
// Ts config file helps us modidfy the behavior of ts compiler

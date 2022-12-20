"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const collection = new NumbersCollection_1.NumbersCollection([256, 128, 64, 32, 16, 8]);
const toSort = new Sorter_1.Sorter(collection);
toSort.sort();
console.log(collection.data);
// Ts config file helps us modidfy the behavior of ts compiler

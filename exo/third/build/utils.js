"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToDate = void 0;
const stringToDate = (dateString) => {
    const date = dateString.split('/').map((value) => {
        return parseInt(value);
    });
    return new Date(date[2], date[1] - 1, date[0]);
};
exports.stringToDate = stringToDate;

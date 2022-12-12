/*
R1: because it's going to generate type any, 
we need to annotate a variable when it's assgined an empty array. 
However if we assign something to that array TS is going to infer the type
*/
const carDealer: string[] = []; //good
const carDeals = []; //bad
const carMakers = ['ford', 'tesla', 'chevy']; //inference

// Two dimensional array
const carByMake: string[][] = [['one']['two']['three']];

//Help with inference when extracting values
/* R2: if we ever pull out a value out of an array of strings,
TS will know that we are pulling out a string, and help us with Type inference
*/
const carOne = carMakers[0]; // don't need to annotate TS knows type
const carTwo = carMakers.pop(); // don't need to annotate TS knows type

// R3:TS can prevent us from adding incompatible values to array
carMakers.push(200); // Cannot add number to a collection of string

/* R4: TS is going to give autocomplete with args passed into map, 
forEach etc methods
*/

carMakers.map((car: string): string => {
  return car.toLowerCase(); // tolower case available thx to type inference
});

/* R5: TS allows for flexible types in arrays
 */
const impDates = [new Date(), '2022-12-30', 2022]; //  type: Date | String | num
impDates.push(new Date());
impDates.push(2022);
impDates.push('2021-23-11');

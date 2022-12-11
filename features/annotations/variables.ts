/* Variables declarations with types annotation

- R1 : We use type annotation to describe what type a value is

- R2 : We cannot reassign variables to a different type
because we already annotate variable with particular type

- R3: If we do declaration and initialization on the same line 
we don't need to annotate, TS will infer the type'

-R4 : When we want a var to have a type that can't be inferred we use annotation

- R5: When a function returns the any type and we need to clarify the value 
*/
let account: number = 5;
let speed: string = 'fast';

// built-in objects annotation syntax
let now: Date = new Date();
console.log(account);
console.log(speed);
console.log(now);

//Array annotation syntax

let colors: string[] = ['red', 'green', 'yellow'];
let numbers: number[] = [1, 2, 3, 4, 5, 6];
console.log(colors);
console.log(numbers);

// Classes annotation syntax

class Car {}

let car: Car = new Car();
console.log(car);

//Object literal annotation syntax

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

console.log(point);

// Functions annotation syntax
// ----
// what type of arguments f expect
// what type of value the f returns

const logNumber: (num: number) => void = (num: number) => {
  console.log(num);
};
logNumber(3);

// when to use annotations

//1- Function that returns the 'any' type
/* because TS can't predict what we can return 
from a function it returns the type "any"
*/
const json = '{"x":"10", "y":"20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates);

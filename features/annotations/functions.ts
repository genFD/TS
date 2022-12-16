//function annotation syntax
/*

GOAL: Demonstrate How to annotate a function

R1:
Even though we get the benefit of type inference 
for the return value we are not going to use it because 
we could easily make the mistake of not returning a value from the 
function and if so TS will return an error

R2:
if we don't return a value from the function we can 
annotate using the void type'
*/
// const add = (a: number, b: number) => {
//   return a + b;
// };

// arrow functions
const add = (a: number, b: number): number => {
  return a + b;
};

add(2, 3);

// named function declarations
function divide(a: number, b: number): number {
  return a / b;
}

// anonymous functions
const multiply = function (a: number, b: number): number {
  return a * b;
};

//void type: if we don't return a value from the function we can
// annotate using the void type

const logger = (message: string): void => {
  console.log(message);
};
//never type: for throwing errors: corner case very rarely
const throwError = (message: string): never => {
  throw new Error(message);
};

//Function that takes an object
const todayWeather = {
  date: new Date(),
  weather: 'Sunny',
};
const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
};
//Es6 Destructuring
// ({destructuring part} / {annotation part}): void => {}
const logWeatherTwo = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};

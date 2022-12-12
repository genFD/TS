//function annotation syntax
/*
R1:
Even though we get the benefit of type inference 
for the return value we are not going to use it because 
we could easily make the mistake of not returning a value from the 
function and if so TS will return an error
*/
// const add = (a: number, b: number) => {
//   return a + b;
// };
const add = (a: number, b: number): number => {
  return a + b;
};
add(2, 3);

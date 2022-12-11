const today = new Date();
console.log(today);
const person = {
  age: 20,
  hello(): void {
    console.log('hello');
  },
};
person.age;

class Color {}
//red has acces to all the properties and method an Color class has.
const red = new Color();
console.log(red);

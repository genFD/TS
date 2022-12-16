//---I - Methods
/*
Points:
A- Refresher 
A class is a blueprint to create an object that has 
different fields and methods to represent a thing

1. To use methods on class we create an instance of this class
2. Capital letter for class definition and lowercase for instance
3. We can attach as many methods as we want
4. One class can extends his methods to another class by using 
the extends keyword
5.when a class extends another class we can choose to override 
certain methods, by redefining the method on the child class

B- How class in TS is different from es2015

1. Existence of modifiers(keyword placed on methods/properties 
inside of class; ex: public, private, protected) in TS

2. The goal of modifiers is to restrict access to functions and variables

3. 
-> Public : means the method can be call anywhere, anytime
-> Private : means the method or the property
 can only be called or accessed by other methods in this class
-> protected: means the method is private and can also be 
called by other methods in child class

4. If we ever extends a class and try to override a new class 
we cannot override the modifiers 
on the child class
*/

class Vehicle {
  drive(): void {
    console.log('driving');
  }
  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('driving car');
  }
  private ignition(): void {
    console.log('click clack');
  }
  startDriving() {
    // ignition can only be called inside of Car class
    this.ignition();
  }
  honkCar() {
    this.honk(); //honk can be called inside of Car class
  }
}

const peugeot = new Car();
peugeot.drive();
peugeot.honkCar();

//---II - Fields
/*
 1. To specify a field/property, we write out the name of
 the property, then the type annotation, then equal sign initialization

 2. we can also initialize a property using a config object 
 that we pass to the instance by specifying a constructor function

 3. the shortcut to automatically initialize a property using 
 a constructor function
  - delete implementation inside constructor
  - delete property defintion at the top
  - in front of the constructor arguments add public/private/protected modifier
  4. whenever we create an instance of child class, the contructor
   method in the parent class is being called if no constructor
   is defined in the child class
  5. when we create a child class that has a constructor, we also need to 
  call super method to call the constructor method of the parent class
*/

class Animal {
  weight: number;
  // height: number
  constructor(weight: number, public height: number) {
    this.weight = weight;
    // this.height = height
  }
  tail = true; // boolean is inferred
}
const animal = new Animal(2, 175);
animal.weight; // number is inferred

class Dog extends Animal {
  constructor(public shout: string, weight: number, height: number) {
    super(weight, height); //args for parent class
  }
}

const maverick = new Dog('woof', 20, 200);

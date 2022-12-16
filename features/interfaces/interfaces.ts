/*
Points: 
1. Using Interface helps to fix long type annotations

2. We can use any type inside the interface, we're 
not limited to primitive values, we can have functions

3. As long as the object passed to the function satifies the interface
requirements, it can have as much properties as you need to, the only
property that is non-negotiable is the property inside interface

the power of interface is really code reuse, interface act 
as gatekeeper to functions and classes
4. We can use a single interface to describe the 
shape of various different objects and this allows for code reuse

5. the general strategy for reusable code in TS : 
--> Create functions that accepts arguments that are typed with interfaces

--> In order to call those functions we're going to make sure that we have
objects and classes that implement that interface
*/

// first version

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name} Year: ${this.year} broken:${this.broken}`;
  },
};
const drink = {
  color: 'yellow',
  carbonated: true,
  sugar: 22,
  summary(): string {
    return `Name: ${this.color} Year: ${this.carbonated} broken:${this.sugar}`;
  },
};

const printVehicle = ({
  name,
  year,
  broken,
}: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`The ${name}, ${year}, and ${broken}`);
};
printVehicle(oldCivic);

//version with interface changes

interface Vehicle {
  // name: string;
  // year: number;
  // broken: boolean;
  summary(): string;
}
// more generic interface name since we don't need name, year, and broken'
interface Report {
  // name: string;
  // year: number;
  // broken: boolean;
  summary(): string;
}
// R1: printInfo can be call with any type of object that
/* satisfies the specifications of Report interface i.e Report is 
a gatekeeper for printInfo, because in order to work with printInfo
you need to have a value that implements the Report interface
*/

const printVehicleWithInterface = (vehicle: Report): void => {
  console.log(`${vehicle.summary()}`);
};

//// more generic function name since function not vehicle-centric
const printInfo = (item: Report): void => {
  console.log(`${item.summary()}`);
};

/*
oldCivic, drink satisfy Reportable requirements
*/
printInfo(oldCivic);
printInfo(drink);

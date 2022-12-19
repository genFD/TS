import { faker } from '@faker-js/faker';
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName('female');
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
/*
Property definition 
- name property
- to model a physical location in thw world
location property that's going to be an object that has a latitude 
that's a number
and longitude that's a number

- randomly generate a longitude and a latitude, assign it to 
a user and use that info to position a user on our map

Property initialization 
- there're two ways to approach this:
    - either initialize on the same line
    - or inside a constructor function
in this case ww're going to initialize inside the constructor 
function because name and location won't be hardcoded values

- by importing faker like so, 
  - that's going to reach into our node_modules
  - find that faker module
  - give us access to all the code inside there through a variable called faker

type definition file

- We can install Common JS libraries into a TS project
- The only condition to get it work inside a TS project is 
to provide a Type definition file
-Why ? Plain JS doesnt have type information attached to it 
TS cannot automatically figure what different types
of value is floating around your codebase

that's where the Type definition file comes in, 
This file is going to tell the compiler 
what are the different types of values inside the js modules 
we want to work with

- Sometimes it's installed by default, sometimes we have to install 
manually, most of them are publicly available


- The only goal is do describe the different types available inside 
the faker module
 \\\
*/

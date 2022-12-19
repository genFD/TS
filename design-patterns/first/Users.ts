/**
 Goal : Create a class definition to generate random values for user properties
 create a new instance of user -> generate random values for name and location
 
 location doesn't get automatically set to be an object
 convert lat and lng into number using parseFloat because
 it takes a string and returns a number that has a decimal value 
 attached to it
 */
import { faker } from '@faker-js/faker';
import { Mappable } from './Map';
export class User implements Mappable {
  name: string;
  location: {
    lng: number;
    lat: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `User name is ${this.name}`;
  }
}

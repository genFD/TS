import { faker } from '@faker-js/faker';
import { Mappable } from './Map';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lng: number;
    lat: number;
  };
  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `<h1>Company name is ${this.name}<h1/>`;
  }
}
